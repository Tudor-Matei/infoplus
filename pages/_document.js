import Document, { Html, Head, Main, NextScript } from "next/document";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style>{dom.css()}</style>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                            (${defaultThemeInitializer})()`,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

function defaultThemeInitializer() {
  try {
    window.__THEME =
      window.localStorage.getItem("theme") ||
      (window.matchMedia ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : "light");

    document.documentElement.className = "theme-" + window.__THEME;
  } catch (e) {
    console.error("Nu s-a putut seta tema de culoare. Motiv:");
    console.error(e);
  }
}
