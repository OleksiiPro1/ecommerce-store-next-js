import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            background: grey;
            font-family: -ms-interpolation-mode;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
