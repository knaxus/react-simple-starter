import React, { Component } from 'react';
import { connect } from 'react-redux';
import RamdomQuote from './component';
import { setQuote, clearQuote, disableButton } from './actions';
import { getDataFromAPI } from '../HandleAPICalls/actions';

class RamdomQuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    this.props.disableButton(true);
    this.props.clearQuote();

    this.props.getDataFromAPI(
      'https://api.quotable.io/random',
      'GET',
      { per_page: 1, orderby: 'rand' },
      ({ author, content }) => {
        this.props.setQuote(content, author);
        this.props.disableButton(false);
      }
      // err => console.log(err),
    );
  }

  render() {
    const quote = this.props.quote;
    return <RamdomQuote getQuote={this.getQuote} quote={quote} />;
  }
}

function mapSateToprops(state) {
  return {
    quote: state.quote,
  };
}

export default connect(mapSateToprops, {
  setQuote,
  clearQuote,
  disableButton,
  getDataFromAPI,
})(RamdomQuoteContainer);
