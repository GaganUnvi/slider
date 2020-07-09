import React, { useState } from 'react';
import Images from './Json';

function App() {
  const [index, setIndex] = useState(0);
  const [load, setLoading] = useState(false);

  function onLoad() {
    setTimeout(() => {
      setLoading(true);
    }, 1000);

    console.log(load);
  }

  return (
    <div className={load ? 'App' : 'nodisplay'}>
      {onLoad()}
      <div className={load ? 'imagebox' : 'nodisplay'}>
        <div>
          {Images.filter((s, i) => i === index).map((s, index) => (
            <div
              onClick={() =>
                s.link !== undefined ? window.open(s.link, '_blank') : ''
              }
            >
              <div className={load ? 'author' : 'nodisplay'}>{s.author}</div>
              <img
                src={s.image}
                className={load ? 'mySlides' : 'nodisplay'}
                alt="logo"
              />

              <div className="quote">{s.quote}</div>
            </div>
          ))}
        </div>
        {Images.map((s, i) => (
          <span
            className={i === index ? 'dot-fade' : 'dot'}
            onClick={() => {
              setIndex(i);
              setLoading(false);
            }}
          ></span>
        ))}
      </div>
      <span
        className="prev"
        onClick={() => {
          index !== 0 ? setIndex(index - 1) : setIndex(index);
          setLoading(false);
        }}
      >
        &#10094;
      </span>
      <span
        className="next"
        onClick={() => {
          index !== Images.length - 1 ? setIndex(index + 1) : setIndex(index);
          setLoading(false);
        }}
      >
        &#10095;
      </span>
    </div>
  );
}

export default App;
