import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getLocalStorage, setLocalStorage } from '../util/localStorage';

const cookieButton = (isOpen) => css`
  margin-left: 10px;
  color: grey;
`;
const cookieBannerStyles = (isOpen) => css`
  height: ${isOpen ? '25px' : 0};
  overflow: hidden;
  transition: all 200ms ease-in;
  margin-left: 1000px;
  color: grey;
`;

export default function App({ Component, pageProps }) {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  function cookieBannerButtonHandler() {
    setLocalStorage('areCookiesAccepted', true);
    setAreCookiesAccepted(true);
  }

  useEffect(() => {
    if (getLocalStorage('areCookiesAccepted')) {
      setAreCookiesAccepted(getLocalStorage('areCookiesAccepted'));
    }
  }, []);

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
      <div css={cookieBannerStyles(!areCookiesAccepted)}>
        This site uses cookies!
        <button
          css={cookieButton}
          onClick={() => {
            cookieBannerButtonHandler();
          }}
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
