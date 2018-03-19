import React, { Component } from 'react';
import { connect } from 'react-redux';
import RamdomQuote from './component';
import { setQuote, clearQuote } from './actions';
import { getDataFromAPI } from '../HandleAPICalls/actions';

class RamdomQuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    this.props.clearQuote();
    this.props.getDataFromAPI(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      'GET',
      undefined,
      (response) => {
        // set the quote in state
        const dataObject = response[0];
        /**
         * refer here for more about this regex:
         * https://stackoverflow.com/questions/1499889/remove-html-tags-in-javascript-with-regex
         */
        const filterHTMLRegex = /(<([^>]+)>)/ig;
        const author = dataObject.title;
        const quote = unescape(dataObject.content.replace(filterHTMLRegex, '')).replace(/\r?\n|\r/g, '');

        this.props.setQuote(quote, author);
      },
      err => console.log(err),
    );
  }

  render() {
    const quote = this.props.quote;
    return (
      <RamdomQuote
        getQuote={this.getQuote}
        quote={quote}
      />
    );
  }
}

function mapSateToprops(state) {
  return {
    quote: state.quote,
  }
}

export default connect(mapSateToprops, {
  setQuote,
  clearQuote,
  getDataFromAPI,
})(RamdomQuoteContainer);
