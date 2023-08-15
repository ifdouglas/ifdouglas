import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/global.theme";
import "../utils/i18n";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="description" content="Ready to build your idea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8007784980150474"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
