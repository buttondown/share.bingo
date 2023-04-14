import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          Share.Bingo - Generate social media sharing links in a snap.
        </title>
        <meta
          name="description"
          content="Generate social media sharing links in a snap."
        />
        <meta
          property="og:title"
          content="Share.Bingo - Generate social media sharing links in a snap."
        />
        <meta
          property="og:description"
          content="It's easy, free, and open source."
        />
      </Head>
      <body className="font-[HexFranklin]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
