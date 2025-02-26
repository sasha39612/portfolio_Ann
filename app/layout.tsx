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
      <title>Anna Stoliarova - UX/UI Designer - Hamburg</title>
      <meta
        name="description"
        content="UX/UI Designer from Hamburg. Freelance UX/UI Design, Web Design, Mobile App Design, and User Experience & Interface Design. Explore my portfolio."
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
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
