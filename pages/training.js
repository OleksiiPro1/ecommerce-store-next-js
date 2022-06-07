import { css } from '@emotion/react';
import Props__state from '../components/Props__state';

const footerStyles = css`
  padding: 100px 20px;
  background: grey;
  color: white;
  margin-top: 70px;

  font-family: ToyotaType-Regular, Arial, sans-serif;
`;
const footerDivStyles = css`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  padding-right: 100px;
  padding-left: 60px;
`;
export default function Footer() {
  return (
    <footer css={footerStyles}>
      <div css={footerDivStyles}>
        <Props__state name="toyota" color="black" engine="2.0" />
      </div>
    </footer>
  );
}
