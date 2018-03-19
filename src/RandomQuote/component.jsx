import React from 'react';
import './style.scss';

export default function RandomQuote({ getQuote }) {
  return (
    <div>
      <button onClick={getQuote} className="myButton">Get me a Quote</button>
    </div>
  );
}
