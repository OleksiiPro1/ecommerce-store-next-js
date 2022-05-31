import Cookies from 'js-cookie';
import Image from 'next/image';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../util/cookies';
import { toyotaDatabase6 } from '../../util/database';

export default function toyota(props) {
  const [isInCart, setIsInCart] = useState('insuranceCounter' in props.toyota);

  const [insuranceCounter, setInsuranceCounter] = useState(
    props.toyota.insuranceCounter || 0,
  );

  return (
    <div>
      <ul>
        <li>
          <Image src={`/${props.toyota.id}.png`} width="78" height="48" />
        </li>
        <li> Model: {props.toyota.model}</li>
        <li>Type: {props.toyota.type}</li>
        <li>Price: {props.toyota.price}</li>
      </ul>

      <button
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
        {isInCart ? 'remove from cart' : 'add to cart'}
      </button>
      <br />
      {isInCart ? (
        <>
          {insuranceCounter}
          <button
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
            add month
          </button>
        </>
      ) : (
        ''
      )}
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
