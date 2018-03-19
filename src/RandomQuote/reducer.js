import {
  SET_QUOTE,
  CLEAR_QUOTE,
} from './constants';

const initialState = {
  quote: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTE:
      return {
        ...state,
        quote: action.quote,
      };

    case CLEAR_QUOTE:
      return {
        ...state,
        quote: '',
      };

    default: return state;
  }
};

