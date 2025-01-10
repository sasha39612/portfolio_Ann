import { ReactNode, Suspense } from 'react';
import Loading from './loading';
import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';
import '../styles/globals.scss';
import styles from './layout.module.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Ann Portfolio</title>
      <meta
        name="description"
        content="This is portfolio for applying a job like UI/UX designer."
      ></meta>
      <body className={styles.root}>
        <Suspense fallback={<Loading />}>
          <Header />
          <main className={styles.mainStyles}>{children}</main>
          <Footer />
          <div id="portal-root"></div>
        </Suspense>
      </body>
    </html>
  );
}
