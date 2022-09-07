import "../styles/globals.css";
import Footer from "./footer";
import Head from "next/head";
import Navbar from "./navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ECFF</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
