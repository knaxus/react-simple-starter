import { combineReducers } from 'redux';
import movieListReducer from '../MovieInfo/reducer';
import randomQuoteReducer from '../RandomQuote/reducer';

export default combineReducers({
  quote: randomQuoteReducer,
  movieList: movieListReducer,
});
