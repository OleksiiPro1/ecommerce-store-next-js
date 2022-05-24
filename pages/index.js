import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const headerStyles = css`
  padding: 8px 14px;
  background: #e1e1e1;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;

  > div > a + a {
    margin-left: 10px;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Explore the newest Toyota trucks, cars, SUVs, hybrids and minivans. See photos, compare models, get tips, calculate payments, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header css={headerStyles}>
        <Link href="/">Home</Link>

        <div>
          <Link href="/about">About</Link>
          <Link href="/about">About</Link>
          <Link href="/about">About</Link>
          <Link href="/about">About</Link>
          <Link href="/about">About</Link>
        </div>
      </header>
      <main>
        <h1>Home</h1>
      </main>
    </div>
  );
}
