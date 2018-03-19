import React from 'react';
import './style.css';

export default function RandomQuote({ getQuote, quote }) {
  return (
    <div>
      <button disabled={quote && quote.disabled} onClick={getQuote} className="myButton">Get me a Quote</button>
      {
        quote && quote.quote &&
        <div className="container">
          <blockquote>
            <p className="quotation">
              {quote && quote.quote}
            </p>
            <footer>— {quote && quote.author}</footer>
          </blockquote>
        </div>
      }
    </div>
  );
}
