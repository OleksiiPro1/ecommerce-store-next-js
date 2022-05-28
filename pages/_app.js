import { css, Global } from '@emotion/react';
import { useState } from 'react';
import Layout from '../components/Layout';

const cookieButton = (isOpen) => css`
  margin-left: 10px;
  color: grey;
`;
const cookiesBanner = (isOpen) => css`
  height: ${isOpen ? '30px' : 0};
  overflow: hidden;
  transition: all 1000ms ease-in;
  margin-left: 1000px;
  color: grey;
`;

function MyApp({ Component, pageProps }) {
  const [isCookieBannerOpen, setIsCookieBannerOpen] = useState(true);
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            background: white;

            font-family: ToyotaType-Regular, Arial, sans-serif;
          }
        `}
      />
      <div css={cookiesBanner(isCookieBannerOpen)}>
        This site uses cookies!
        <button
          css={cookieButton}
          onClick={() => setIsCookieBannerOpen(!isCookieBannerOpen)}
        >
          Accept all cookies
        </button>
      </div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
