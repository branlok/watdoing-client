import { SignInButton, SignOutButton, SignUpButton } from '@clerk/nextjs'
import styles from './page.module.css'

export default async function Home() {
  // TODO - if user already signed in, redirect them to their profile page.
  return (
    <div className={styles.wrapper}>
      <aside className={styles.aside}>
        <h1>Watdoing</h1>
      </aside>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headlineContainer}>
            <span>Stop Dreaming, start doing</span>
            <h1>From a thought to a spark</h1>
            <p>Grow your ideas. Collaborate with creators. A calm space to shape your vision.</p>
          </div>
          <div className={styles.previewContainer}>
            profile here...
          </div>
        </header>
        <div className={styles.ctaWrapper}>
          <div>

            <SignUpButton>
              <button>Create Account</button>
            </SignUpButton>

            <SignOutButton>
              <button>Sign Out</button>
            </SignOutButton>
            <SignInButton>
              <button>Sign In</button>
            </SignInButton>
          </div>
        </div>
        <section className={styles.informationSection}>
          <div>
            <ul>
              <li>Toss out quick thoughts on anything—beyond likes, no judgment, just yours to keep private or share with the world.</li>
              <li>Mold your ideas with pre-post sketches and post-post polish into something radiant.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>

  )
}