import Head from "next/head";
import { Header, Navbar, Hero, Projects } from "../components";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Gowthaman</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>
      </Head>
      <body className="bg-body h-screen text-white font-poppins">
        <Header />
        <Navbar />
        <div>
          <Hero />
        </div>
        <div className="relative z-10">
          <Projects />
        </div>
      </body>
    </div>
  );
};

export default Home;
