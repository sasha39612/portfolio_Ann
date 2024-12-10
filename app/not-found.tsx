import Link from 'next/link'
import styles from 'layout.module.scss'
 
export default function NotFound() {
  return (
    <div className={styles.messageContainer}>
      <h2>Not Found</h2>
      <p className={styles.notFoundText}>Could not find requested resource</p>
      <Link className={styles.button} href="/">Return Home</Link>
    </div>
  )
}
