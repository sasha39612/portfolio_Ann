'use client'
import { useEffect } from 'react'
import styles from './layout.module.scss'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  const handleReset = () => {
    reset();
    window.location.href = '/'
  };

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className={styles.messageContainer}>
      <h2>Page was not found or something went wrong!</h2>
      <button
        className={styles.button}
        onClick={handleReset}
      >
        Try again
      </button>
    </div>
  )
}
