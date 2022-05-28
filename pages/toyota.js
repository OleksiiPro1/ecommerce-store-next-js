import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { toyotaDatabase } from '../util/database';

const chooseDivToyota = css`
  margin-left: 50px;
  margin-right: 50px;
`;
const divToyotaListItemsStyles = css``;

const toyotaListItemsStyles = css`
  border: 1px solid #ccc;
  padding: 12px;
  & + & {
    margin-top: 10px;
  }
`;

export default function Toyota(props) {
  return (
    <div>
      <Head>
        <title>Toyota Motor Corporation</title>
        <meta name="description" content="About dealer toyota" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div css={chooseDivToyota}>
        <Image src="/15.png" alt="toyota" width="1534px" height="240px" />
      </div>
      <div css={chooseDivToyota}>
        <h1>Toyota Motor Corporation</h1>
        <div css={divToyotaListItemsStyles}>
          {props.toyota.map((cars) => {
            return (
              <div key={`cars-${cars.id}`} css={toyotaListItemsStyles}>
                <Image src={`/${cars.id}.png`} width="78" height="48" />

                <div>Model: {cars.model}</div>
                <div>Price: {cars.price}</div>
                <div>Type: {cars.type}</div>
                <div>description: {cars.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export function getServerSideProps() {
  //  console.log(toyotaDatabase);
  return {
    props: {
      toyota: toyotaDatabase,
    },
  };
}
