import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
