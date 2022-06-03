import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="gowthaman.app" />
        <meta property="og:image" content="https://i.imgur.com/JcxBZNI.png" />
        <link rel="image_src" href="https://i.imgur.com/JcxBZNI.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className="bg-body text-white font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
