import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { React, useState } from 'react';
import { toyotaDatabase6 } from '../util/database';

const chooseDivToyota = css`
  margin-left: 50px;
  margin-right: 50px;
`;

export default function Cart(props) {
  const [count, setCount] = useState(1);
  console.log(props);
  return (
    <div>
      <Head>
        <title>Toyota Motor Corporation</title>
        <meta name="description" content="About dealer toyota" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div css={chooseDivToyota}>
        <Image src="/17.png" alt="toyota" width="1534px" height="240px" />
      </div>
      <div css={chooseDivToyota}>
        <h1>Toyota Motor Corporation</h1>
        <div>
          {props.toyota.map((detail) => {
            return <div key={detail.toyotaInCart.id}></div>;
          })}
        </div>
      </div>
    </div>
  );
}
export function getServerSideProps(context) {
  const currentCart = JSON.parse(context.req.cookies.toyota || '[]');
  const toyotaInCart = currentCart.map((item) => {
    const itemFound = toyotaDatabase6.find((toyota) => toyota.id === item.id);
    const newCart = { ...itemFound, quantity: item.count };
    return newCart;
  });
  console.log(toyotaDatabase6);
  return {
    props: {
      toyota: toyotaInCart || null,
    },
  };
}
