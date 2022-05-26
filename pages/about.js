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
        <p>
          oyota Motor Corporation (Japanese: トヨタ自動車株式会社, Hepburn:
          Toyota Jidōsha kabushikigaisha, IPA: [toꜜjota], English: /tɔijoʊtə/,
          commonly known as simply Toyota) is a Japanese multinational
          automotive manufacturer headquartered in Toyota City, Aichi, Japan. It
          was founded by Kiichiro Toyoda and incorporated on August 28, 1937.
          Toyota is one of the largest automobile manufacturers in the world,
          producing about 10 million vehicles per year.
        </p>
        <p>
          The company was originally founded as a spinoff of Toyota Industries,
          a machine maker started by Sakichi Toyoda, Kiichiros father. Both
          companies are now part of the Toyota Group, one of the largest
          conglomerates in the world. While still a department of Toyota
          Industries, the company developed its first product, the Type A engine
          in 1934 and its first passenger car in 1936, the Toyota AA.
        </p>
        <p>
          After World War II, Toyota benefited from Japans alliance with the
          United States to learn from American automakers and other companies,
          which would give rise to The Toyota Way (a management philosophy) and
          the Toyota Production System (a lean manufacturing practice) that
          would transform the small company into a leader in the industry and
          would be the subject of many academic studies.
        </p>
        <p>
          In the 1960s, Toyota took advantage of a rapidly growing Japanese
          economy to sell cars to a growing middle-class, leading to the
          development of the Toyota Corolla, which would go on to become the
          worlds all-time best-selling automobile. The booming economy also
          funded an international expansion that would allow Toyota to grow into
          one of the largest automakers in the world, the largest company in
          Japan and the ninth-largest company in the world by revenue, as of
          December 2020. Toyota was the worlds first automobile manufacturer to
          produce more than 10 million vehicles per year, a record set in 2012,
          when it also reported the production of its 200 millionth vehicle.
        </p>
      </main>
    </div>
  );
}
