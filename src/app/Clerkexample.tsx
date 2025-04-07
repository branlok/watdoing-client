"use client"
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

function MyComponent() {
    const { getToken, userId } = useAuth();
    const [data, setData] = useState(null);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!userId) return; // Only fetch if logged in

            try {
                // Get the token right before the request
                const token = await getToken();

                if (!token) {
                    console.error("Failed to get Clerk token");
                    setError("Authentication token is missing.");
                    return;
                }

                const response = await fetch('http://localhost:3001/thought', { // Your NestJS API URL
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
                setError(null); // Clear previous errors

            } catch (err) {
                console.error('API request failed:', err);
                setError(err.message);
                setData(null); // Clear previous data
            }
        };

        fetchData();
    }, [userId, getToken]); // Re-run if userId or getToken changes

    // Render logic based on data or error...
    return (
        <div>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
}

export default MyComponent;