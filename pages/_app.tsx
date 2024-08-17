import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gowthaman Aravindan</title>
        <meta property="og:title" content="Gowthaman Aravindan" />
        <meta property="og:image" content="https://i.imgur.com/JcxBZNI.png" />
        <meta
          property="og:description"
          content="Check out my personal website to explore innovative software projects and dive into my professional journey with top tech companies"
        />
        <meta property="og:url" content="https://gowthaman.app" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
