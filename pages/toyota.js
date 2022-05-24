import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { toyotaDatabase } from '../util/database';

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
        <title>Toyota</title>
        <meta name="description" content="About dealer toyota" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Toyota</h1>
      <div css={divToyotaListItemsStyles}>
        {props.toyota.map((cars) => {
          return (
            <div key={`cars-${cars.id}`} css={toyotaListItemsStyles}>
              <div>Model: {cars.model}</div>
              <div>Price: {cars.price}</div>
              <div>Type: {cars.type}</div>
              <div>http://localhost:3000/toyota/2</div>
            </div>
          );
        })}
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
