import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import Head from "next/head";

const progress = new ProgressBar({
  size: 4,
  color: `#FE595E`,
  className: `z-50`,
  delay: 100,
});

// Next router fires this event when the router starts to change from one page to another. So, we will start andend our progress bar when routing is initiated and is about to complete.
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
