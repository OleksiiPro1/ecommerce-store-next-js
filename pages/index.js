import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

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

      <main>
        <h1>Home</h1>
      </main>
    </div>
  );
}
