import { ReactNode, Suspense } from 'react';
import '../styles/globals.scss'
import styles from './layout.module.scss'
import Loading from './loading';
import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={styles.root}>
        <Suspense fallback={<Loading />}>
          <Header />
          <main className={styles.mainStyles}>
            {children}
          </main>
          <Footer />
          <div id="portal-root"></div>
        </Suspense>
      </body>
    </html>
  );
}
