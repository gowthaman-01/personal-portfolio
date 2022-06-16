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
          content="I am a penultimate engineering student at NUS currently interning at a Web3 startup as a Software Engineer Intern! 
          Here is my personal webstie - you can view my past projects I have worked on as well as my experiences in different companies 
          and organisations in the field of software development."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
