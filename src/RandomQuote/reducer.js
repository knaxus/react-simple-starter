import {
  SET_QUOTE,
  CLEAR_QUOTE,
} from './constants';

const initialState = {
  quote: '',
  author: '',
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

    default: return state;
  }
};

