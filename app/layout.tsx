import '../styles/globals.scss'
import styles from './layout.module.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.root}>
        {children}
      </body>
    </html>
  );
}
