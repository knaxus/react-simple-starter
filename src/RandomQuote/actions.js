import {
  SET_QUOTE,
  CLEAR_QUOTE,
  TOGGLE_BTN_DISABLE,
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

export function disableButton(disabled) {
  return {
    type: TOGGLE_BTN_DISABLE,
    disabled,
  };
}
