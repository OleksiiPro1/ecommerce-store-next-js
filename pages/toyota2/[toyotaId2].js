import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toyotaDatabase2 } from '../../util/database';

const chooseColor = css`
  margin-left: 300px;
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
      <div css={chooseColor}>
        <div>
          <h1>Choose your colors</h1>
          <br />

          <div>
            <Image src={`/${props.toyota.id}.webp`} width="624" height="328" />
          </div>
          <div>
            <Link href="/toyota2/91">
              <Image src="/81.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota2/92">
              <Image src="/82.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota2/93">
              <Image src="/83.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota2/94">
              <Image src="/84.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota2/95">
              <Image src="/85.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota2/96">
              <Image src="/86.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota2/97">
              <Image src="/87.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota2/98">
              <Image src="/88.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota2/99">
              <Image src="/89.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const foundToyota = toyotaDatabase2.find((toyota) => {
    return toyota.id === context.query.toyotaId2;
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
