import {
  SET_QUOTE,
  CLEAR_QUOTE,
} from './constants';

export function setQuote(quote) {
  return {
    type: SET_QUOTE,
    quote,
  }
}

export function clearQuote() {
  return {
    type: CLEAR_QUOTE,
  };
}
