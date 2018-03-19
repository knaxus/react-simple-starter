import { combineReducers } from 'redux';
import randomQuoteReducer from '../RandomQuote/reducer';

export default combineReducers({
  quote: randomQuoteReducer,
});
