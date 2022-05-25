import { css, Global } from '@emotion/react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            background: #f8f8ff;
            font-family: -ms-interpolation-mode;
          }
        `}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
