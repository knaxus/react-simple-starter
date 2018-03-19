import {
  SET_QUOTE,
  CLEAR_QUOTE,
} from './constants';

export function setQuote(quote, author) {
  return {
    type: SET_QUOTE,
    quote,
    author,
  };
}

export function clearQuote() {
  return {
    type: CLEAR_QUOTE,
  };
}
