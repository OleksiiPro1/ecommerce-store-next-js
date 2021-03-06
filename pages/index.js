import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

const chooseDivToyota = css`
  margin-left: 100px;
`;
const chooseLcText = css`
  padding-left: 90px;
  width: 80%;
`;
const chooseLcPic = css`
  margin-left: 60px;
`;
const chooseLc = css`
  display: flex;

  padding: 30px;
`;
const chooseToyota = css`
  cursor: crosshair;
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

      <main>
        <div css={chooseDivToyota}>
          <h1>
            Choose your TOYOTA!
            {')'}
          </h1>
          <div css={chooseToyota}>
            <Link href="/insurance/11">
              <Image src="/11.png" alt="toyota" width="390px" height="240px" />
            </Link>
            <Link href="/insurance/12">
              <Image src="/12.png" alt="toyota" width="390px" height="240px" />
            </Link>
            <Link href="/insurance/13">
              <Image src="/13.png" alt="toyota" width="390px" height="240px" />
            </Link>
            <Link href="/insurance/14">
              <Image src="/14.png" alt="toyota" width="390px" height="240px" />
            </Link>
            <Link href="/insurance/15">
              <Image src="/15.png" alt="toyota" width="390px" height="240px" />
            </Link>
            <Link href="/insurance/16">
              <Image src="/16.png" alt="toyota" width="390px" height="240px" />
            </Link>
          </div>
        </div>
        <div css={chooseLc}>
          <div css={chooseLcPic}>
            <Image src="/10.jpg" alt="toyota" width="976px" height="549px" />
          </div>
          <div css={chooseLcText}>
            <h2>Toyota Land Cruiser LC 300. Coming soon!</h2>
            <p>
              Since its launch in 1951, the Land Cruiser has supported the
              safety and security of its owners and passengers, and allowed
              people to go anywhere and everywhere and come back alive and safe.
              In order to continue living up to its reputation, the new Land
              Cruiser has evolved, and now boasts improved reliability,
              durability, and off-road performance.
            </p>
            <p>
              The identity of the new Land Cruiser 300 Series has been reshaped
              by merging cutting-edge technologies with technologies accumulated
              over many years, enabling the driver to drive on any type of road
              in the world without tiring. The new Land Cruiser will launch
              today.
            </p>
            <p>
              In order to continue living up to its reputation, the new Land
              Cruiser has evolved, and now boasts improved reliability,
              durability, and off-road performance.
            </p>
          </div>
        </div>
        <div css={chooseLc}>
          <div css={chooseLcText}>
            <h2>Thinking of buy a Toyota Supra?</h2>
            <p>
              The 2022 Toyota Supra is a great option if you re shopping for a
              luxury sports car . Thanks to its punchy turbocharged
              acceleration, lively handling, and composed ride, the Supra is a
              joy to drive, whether you re carving along switchback roads or
              just cruising down the freeway. Its interior is handsome and
              reasonably comfy for two, and there s enough cargo space for
              weekend getaways. The Supra also earns praise for its easy-to-use
              infotainment system, numerous safety features, and top-notch fuel
              economy.
            </p>

            <p>
              The 2022 Toyota Supra is a great option if you re shopping for a
              luxury sports car . Thanks to its punchy turbocharged
              acceleration, lively handling, and composed ride, the Supra is a
              joy to drive, whether you re carving along switchback roads or
              just cruising down the freeway. Its interior is handsome and
              reasonably comfy for two, and there s enough cargo space for
              weekend getaways.
            </p>
          </div>
          <div css={chooseLcPic}>
            <Image src="/9.jpg" alt="toyota" width="976px" height="549px" />
          </div>
        </div>
      </main>
    </div>
  );
}
