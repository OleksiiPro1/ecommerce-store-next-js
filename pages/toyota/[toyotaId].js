import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toyotaDatabase } from '../../util/database';

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
      <div>
        <div>
          <div>
            <Image src={`/${props.toyota.id}.png`} width="390" height="240" />
          </div>
          <h1>{props.toyota.model}</h1>
          {/* <div>model: {props.toyota.model}</div> */}
          <div>Price: {props.toyota.price}</div>
          <div>{props.toyota.description}</div>
          <br />
          <br />
          <hr />
          <br />
          <div>Comprehensive insurance/month</div>

          <div>
            <>
              <button onClick={() => setCount(count + 100)}>+</button>
              <button onClick={() => setCount(1200)}>Add to cart</button>
              <button onClick={() => setCount(count - 100)}>-</button>

              <div>Price $ {calculatePositiveValues(count).join('')} </div>
              <div> {calculatePositiveValues(count / 100).join('')} Months</div>
            </>
          </div>
        </div>
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
