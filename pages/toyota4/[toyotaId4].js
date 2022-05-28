import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toyotaDatabase4 } from '../../util/database';

const margColor = css`
  margin-top: 79px;
`;
const b1Styles = css`
  font-size: 14px;
  padding: 10px 24px;
  background-color: white;
  color: black;
  border: 2px solid gray;
`;
const chooseColor = css`
  margin-left: 300px;
  margin-bottom: 110px;
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
          <h1>Choose your color</h1>
          <Link href="/toyota3/71">
            <button css={b1Styles}>Drag to rotate</button>
          </Link>
          <br />

          <div>
            <Image src={`/${props.toyota.id}.webp`} width="768" height="249" />
          </div>
          <div css={margColor}>
            <Link href="/toyota4/61">
              <Image src="/81.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota4/62">
              <Image src="/82.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota4/63">
              <Image src="/83.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota4/64">
              <Image src="/84.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota4/65">
              <Image src="/85.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota4/66">
              <Image src="/86.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota4/67">
              <Image src="/87.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota4/68">
              <Image src="/88.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
            <Link href="/toyota4/69">
              <Image src="/89.bmp" alt="toyota" width="50px" height="50px" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const foundToyota = toyotaDatabase4.find((toyota) => {
    return toyota.id === context.query.toyotaId4;
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
