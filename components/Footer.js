import { css } from '@emotion/react';

const footerStyles = css`
  padding: 8px 14px;
  background: #e1e1e1;

  margin-top: 10px;
`;

export default function Footer() {
  return <footer css={footerStyles}>Footer</footer>;
}
