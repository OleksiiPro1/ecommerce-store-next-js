import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../util/cookies';
import { toyotaDatabase6 } from '../../util/database';

const divBestStyles = css`
  margin-top: -50px;
  margin-bottom: 60px;
`;

const ulStyles = css`
  list-style-type: none;
`;
const cartStyles = css`
  float: left;
  margin-right: 150px;
`;
const b1Styles = css`
  font-size: 14px;
  padding: 10px 24px;
  background-color: white;
  color: black;
  border: 2px solid gray;
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 5px;
`;

const textStyles = css`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 100px;
`;
export default function toyota(props) {
  const [isInCart, setIsInCart] = useState('insuranceCounter' in props.toyota);

  const [insuranceCounter, setInsuranceCounter] = useState(
    props.toyota.insuranceCounter || 0,
  );

  return (
    <div>
      <div css={divBestStyles}>
        <Image src="/price.png" alt="toyota" width="1350px" height="175px" />
      </div>
      <ul css={ulStyles}>
        <li>
          <div css={cartStyles}>
            <Image
              src={`/${props.toyota.id}.png`}
              width="390px"
              height="240px"
            />
          </div>
        </li>
        <li> Model: {props.toyota.model}</li>
        <li>Type: {props.toyota.type}</li>
        <li>Price: {props.toyota.price}$</li>
      </ul>

      <button
        css={b1Styles}
        onClick={() => {
          const currentCart = Cookies.get('cart')
            ? getParsedCookie('cart')
            : [];
          let newCart;

          if (
            currentCart.find(
              (toyotaInCart) => props.toyota.id === toyotaInCart.id,
            )
          ) {
            newCart = currentCart.filter(
              (toyotaInCart) => toyotaInCart.id !== props.toyota.id,
            );
            setIsInCart(false);
            setInsuranceCounter(0);
          } else {
            newCart = [
              ...currentCart,
              { id: props.toyota.id, insuranceCounter: 0 },
            ];
            setIsInCart(true);
          }

          setStringifiedCookie('cart', newCart);
        }}
      >
        {isInCart ? 'remove from cart' : 'Bye now!'}
      </button>
      <br />
      {isInCart ? (
        <>
          {insuranceCounter}
          <button
            css={b1Styles}
            onClick={() => {
              setInsuranceCounter(insuranceCounter + 1);

              const currentCart = Cookies.get('cart')
                ? getParsedCookie('cart')
                : [];

              const currentToyotaInCart = currentCart.find(
                (toyotaInCart) => props.toyota.id === toyotaInCart.id,
              );

              currentToyotaInCart.insuranceCounter += 1;

              setStringifiedCookie('cart', currentCart);
            }}
          >
            add to cart
          </button>
          <Link href="/cart">🛒</Link>
        </>
      ) : (
        ''
      )}
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
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');

  const singleToyota = toyotaDatabase6.find((toyota) => {
    return toyota.id === context.query.insuranceId;
  });

  const currentToyotaInCart = currentCart.find(
    (toyotaInCart) => singleToyota.id === toyotaInCart.id,
  );

  const superToyota = { ...singleToyota, ...currentToyotaInCart };

  return {
    props: {
      toyota: superToyota,
    },
  };
}
