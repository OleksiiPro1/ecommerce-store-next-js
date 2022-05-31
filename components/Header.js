import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  padding: 15px 60px;
  background: #000000;
  font-family: ToyotaType-Regular, Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  > div > a {
    text-decoration: none;
    color: white;
  }

  > div > a + a {
    margin-left: 60px;
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/toyota/3">Best seller</Link>
        <Link href="/toyota2/91">My favorite color</Link>
        <Link href="/toyota">All Toyota cars </Link>
        <Link href="/about">About Toyota</Link>
        <Link href="/cart">🛒</Link>
      </div>
    </header>
  );
}
