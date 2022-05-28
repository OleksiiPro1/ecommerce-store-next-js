import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toyotaDatabase } from '../../util/database';

const b1Styles = css`
  font-size: 14px;
  padding: 10px 24px;
  background-color: white;
  color: black;
  border: 2px solid gray;
  margin-top: 10px;
  margin-right: 40px;
`;
const b2Styles = css`
  font-size: 14px;
  padding: 10px 24px;
  background-color: white;
  color: black;
  border: 2px solid gray;
  margin-top: 10px;
  margin-left: 40px;
`;
const b3Styles = css`
  border-radius: 12px;
  font-size: 14px;
  padding: 10px 24px;
  background-color: white;
  color: black;
  border: 2px solid gray;
  margin-top: 20px;
  margin-left: 120px;
`;
const textStyles = css`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 50px;
`;
const cartStyles = css`
  float: left;
  margin-right: 150px;
`;
const sStyles = css`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 50px;
`;
const cStyles = css`
  display: flex;
  justify-content: space-around;
  display: inline-block;
`;

export default function Toyota(props) {
  if (!props.toyota) {
    return (
      <div>
        <Head>
          <title>Toyota not found</title>
          <meta name="description" content="Toyota not found" />
        </Head>

        <h1>404 Toyota not found</h1>
      </div>
    );
  }
  // const router = useRouter();
  // const { toyotaId } = router.query;
  function calculatePositiveValues(count) {
    if (count >= 0) {
      return [count];
    } else if (count < 0) {
      return [0];
    }
  }

  const [count, setCount] = useState(0);
  return (
    <div>
      <Head>
        <title>
          {props.toyota.model}, the {props.toyota.type}
        </title>
        <meta
          name="description"
          content={`${props.toyota.type} is a ${props.toyota.type} with a ${props.toyota.accessory}`}
        />
      </Head>
      <div css={sStyles}>
        <div>
          <div css={cartStyles}>
            <Image src={`/${props.toyota.id}.png`} width="390" height="240" />
          </div>
          <h1>{props.toyota.model}</h1>
          <br />
          Price: {props.toyota.price}
          <br />
          <br />
          {props.toyota.description}
          <br />
          <br />
          <hr />
          {/* <div>model: {props.toyota.model}</div> */}
          <h3>Comprehensive insurance</h3>
          <div>
            <>
              <div css={cStyles}>
                <button css={b1Styles} onClick={() => setCount(count + 100)}>
                  +
                </button>
                Price: {calculatePositiveValues(count).join('')}$ (Months{' '}
                {calculatePositiveValues(count / 100).join('')})
                <button css={b2Styles} onClick={() => setCount(count - 100)}>
                  -
                </button>
                <div>
                  <button css={b3Styles} onClick={() => setCount(1200)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      <div css={textStyles}>
        <br />
        <br />
        <div>
          <hr />
        </div>
        <br />
        <br />

        <p>
          Since its launch in 1951, the Land Cruiser has supported the safety
          and security of its owners and passengers, and allowed people to go
          anywhere and everywhere and come back alive and safe. In order to
          continue living up to its reputation, the new Land Cruiser has
          evolved, and now boasts improved reliability, durability, and off-road
          performance.
        </p>
        <p>
          The 2022 Toyota Supra is a great option if you re shopping for a
          luxury sports car . Thanks to its punchy turbocharged acceleration,
          lively handling, and composed ride, the Supra is a joy to drive,
          whether you re carving along switchback roads or just cruising down
          the freeway. Its interior is handsome and reasonably comfy for two,
          and there s enough cargo space for weekend getaways. The Supra also
          earns praise for its easy-to-use infotainment system, numerous safety
          features, and top-notch fuel economy.
        </p>
        <p>
          Since its launch in 1951, the Land Cruiser has supported the safety
          and security of its owners and passengers, and allowed people to go
          anywhere and everywhere and come back alive and safe. In order to
          continue living up to its reputation, the new Land Cruiser has
          evolved, and now boasts improved reliability, durability, and off-road
          performance.
        </p>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const foundToyota = toyotaDatabase.find((toyota) => {
    return toyota.id === context.query.toyotaId;
  });
  if (!foundToyota) {
    context.res.statusCode = 404;
  }
  return {
    props: {
      toyota: foundToyota || null,
    },
  };
}
