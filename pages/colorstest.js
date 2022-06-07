import Head from 'next/head';

const initialColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'brown',
  'black',
  'red',
  'orange',
];

export default function colorsTest() {
  return (
    //#region Context
    <div>
      <Head>
        <title>Create Next App</title>
        <meta />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Colors</h1>
        <div
          className="wrapper"
          style={{
            display: 'flex',
            width: '306px',
            height: '306px',
            flexWrap: 'wrap',
          }}
        >
          {initialColors.map((item) => (
            <div
              key={item.id}
              style={{
                boxSizing: 'border-box',
                width: '100px',
                border: `5px solid ${item}`,
                height: '100px',
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <h2> {`My colors: ${initialColors}`}</h2>
        <br />
        <br />
        <h2>My colors: {initialColors} </h2>
      </main>
    </div>
  );
}
//#endregion
