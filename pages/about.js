import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function About() {
  return (
    <div>
      <Head>
        <title>about</title>
        <meta name="description" content="About dealer toyota" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About</h1>
        <Image src="/1.png" alt="toyota" width="390px" height="240px" />
        <Image src="/2.png" alt="toyota" width="390px" height="240px" />
        <Image src="/3.png" alt="toyota" width="390px" height="240px" />
        <Image src="/4.png" alt="toyota" width="390px" height="240px" />
        <Image src="/5.png" alt="toyota" width="390px" height="240px" />
        <Image src="/6.png" alt="toyota" width="390px" height="240px" />
      </main>
    </div>
  );
}
