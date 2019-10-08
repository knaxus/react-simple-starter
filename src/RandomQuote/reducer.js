import { SET_QUOTE, CLEAR_QUOTE, TOGGLE_BTN_DISABLE } from './constants';

const initialState = {
  quote: '',
  author: '',
  disabled: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTE:
      return {
        ...state,
        quote: action.quote,
        author: action.author,
      };

    case CLEAR_QUOTE:
      return {
        ...state,
        quote: '',
        author: '',
      };

    case TOGGLE_BTN_DISABLE:
      return {
        ...state,
        disabled: action.disabled,
      };

    default:
      return state;
  }
};
