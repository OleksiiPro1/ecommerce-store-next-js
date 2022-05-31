import Cookies from 'js-cookie';
import Image from 'next/image';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../util/cookies';
import { toyotaDatabase6 } from '../../util/database';

export default function Fruit(props) {
  const [isInDiet, setIsInDiet] = useState('eatCounter' in props.fruit);

  const [eatCounter, setEatCounter] = useState(props.fruit.eatCounter || 0);

  return (
    <div>
      <ul>
        <li>
          <Image src={`/${props.fruit.id}.png`} width="78" height="48" />
        </li>
        <li> Model: {props.fruit.model}</li>
        <li>Type: {props.fruit.type}</li>
        <li>Price: {props.fruit.price}</li>
      </ul>

      <button
        onClick={() => {
          const currentDiet = Cookies.get('diet')
            ? getParsedCookie('diet')
            : [];
          let newDiet;

          if (
            currentDiet.find((fruitInDiet) => props.fruit.id === fruitInDiet.id)
          ) {
            newDiet = currentDiet.filter(
              (fruitInDiet) => fruitInDiet.id !== props.fruit.id,
            );
            setIsInDiet(false);
            setEatCounter(0);
          } else {
            newDiet = [...currentDiet, { id: props.fruit.id, eatCounter: 0 }];
            setIsInDiet(true);
          }

          setStringifiedCookie('diet', newDiet);
        }}
      >
        {isInDiet ? 'remove from cart' : 'add to cart'}
      </button>
      <br />
      {isInDiet ? (
        <>
          {eatCounter}
          <button
            onClick={() => {
              setEatCounter(eatCounter + 1);

              const currentDiet = Cookies.get('diet')
                ? getParsedCookie('diet')
                : [];

              const currentFruitInDiet = currentDiet.find(
                (fruitInDiet) => props.fruit.id === fruitInDiet.id,
              );

              currentFruitInDiet.eatCounter += 1;

              setStringifiedCookie('diet', currentDiet);
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
  const currentDiet = JSON.parse(context.req.cookies.diet || '[]');

  const singleFruit = toyotaDatabase6.find((fruit) => {
    return fruit.id === context.query.insuranceId;
  });

  const currentFruitInDiet = currentDiet.find(
    (fruitInDiet) => singleFruit.id === fruitInDiet.id,
  );

  const superFruit = { ...singleFruit, ...currentFruitInDiet };

  return {
    props: {
      fruit: superFruit,
    },
  };
}
