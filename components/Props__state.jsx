import { css } from '@emotion/react';
import { useState } from 'react';

const style = css`
  color: white;
`;


export default function HowToProps(props) {
  const { name, color, engine } = props;

  const [count, setCount] = useState(5);
  const [color1, setColor1] = useState('red');

  return (
    <div>
      <h1 css={style}>
        {name}
        {' - '}
        {color}
        {' - '}
        {engine}
      </h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        +++
      </button>
      {count}
      <button type="button" onClick={() => setCount(count - 1)}>
        ---
      </button>
    </div>
  );
}
