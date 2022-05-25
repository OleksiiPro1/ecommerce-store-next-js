import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function About() {
  return (
    <div>
      <Head>
        <title>
          Helping millions of people drive our quality vehicles home
        </title>
        <meta name="description" content="About dealer toyota" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Helping millions of people drive our quality vehicles home</h1>
        <Image src="/7.jpg" alt="toyota" width="1613px" height="600px" />
        <h1>Driving success since 1957</h1>
        <Image src="/8.jpg" alt="toyota" width="1613px" height="600px" />
      </main>
    </div>
  );
}
