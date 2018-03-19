import React, { Component } from 'react';
import { connect } from 'react-redux';
import RamdomQuote from './component';
import { getDataFromAPI } from '../HandleAPICalls/actions';

class RamdomQuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    this.props.getDataFromAPI(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      'GET',
      undefined,
      response => console.log(response),
      err => err,
    );
  }

  render() {
    return (
      <RamdomQuote
        getQuote={this.getQuote}
      />
    );
  }
}

export default connect(null, { getDataFromAPI })(RamdomQuoteContainer);
