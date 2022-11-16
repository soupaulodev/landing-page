import { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

export default function Document() {
  return (
    <Html>
      <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          />

          <meta name="description" content="Paulo Marques Dev - Landing page" />
          <Link
            rel="icon"
            href="../public/favicon.ico"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}