import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { React, useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../util/cookies';
import { toyotaDatabase6 } from '../util/database';

const chooseDivToyota = css`
  margin-left: 50px;
  margin-right: 50px;
`;

export default function Cart({ toyota }) {
  const [carsInCart, setCarsInCart] = useState(toyota); // <<<=== step 1 set current state from props

  const handleRemove = (carId) => {
    const filteredCars = carsInCart.filter((car) => car.id !== carId); // >>> Props => State

    const currentCookies = getParsedCookie('cart');
    const newCookies = currentCookies.filter((cookie) => cookie.id !== carId);

    setStringifiedCookie('cart', newCookies);
    return setCarsInCart(filteredCars);
  };

  const handleChangeQuantity = (carId, action) => {
    const newState = carsInCart.map((car) => {
      if (car.id !== carId) {
        return car;
      }

      switch (action) {
        case 'decrease':
          return {
            ...car,
            quantity: car.quantity - 1,
          };

        case 'increase':
          return {
            ...car,
            quantity: car.quantity + 1,
          };

        default:
          return car;
      }
    });

    return setCarsInCart(newState);
  };

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
        <div>
          <h1>Congratulations - You made the right choice!</h1>
        </div>
        <div>
          {carsInCart.map((car) => {
            return (
              <div key={car.id}>
                <Image src={`/${car.id}.png`} width="156px" height="96px" />
                <br />
                {car.model}
                <br />
                {car.type}
                <br />
                {car.price}$
                <br />
                <button
                  type="button"
                  onClick={() => handleChangeQuantity(car.id, 'decrease')}
                  disabled={car.quantity === 1}
                >
                  {'-'}
                </button>
                Quantity: {car.quantity}
                <button
                  type="button"
                  onClick={() => handleChangeQuantity(car.id, 'increase')}
                >
                  {'+'}
                </button>
                <br />
                <br />
                <br />
                <button
                  type="button"
                  onClick={() => {
                    handleRemove(car.id);
                  }}
                >
                  Remove from cart
                </button>
                <br />
                <br />
                <hr />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');

  const toyotaInCart = currentCart.map((item) => {
    const itemFound = toyotaDatabase6.find((toyota) => toyota.id === item.id);
    return { ...itemFound, quantity: item.insuranceCounter };
  });

  return {
    props: {
      toyota: toyotaInCart || null,
    },
  };
}
