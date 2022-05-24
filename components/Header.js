import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  padding: 8px 14px;
  background: #e1e1e1;

  display: flex;
  justify-content: space-between;

  > div > a + a {
    margin-left: 10px;
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <Link href="/">Home</Link>

      <div>
        <Link href="/toyota">Toyota</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
}
