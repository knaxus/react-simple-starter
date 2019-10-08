import {
  FETCH_MOVIE_LIST,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_LIST_FAILURE,
} from './constants';

const movieListInitialState = {
  data: [],
  isFetching: false,
  error: null,
};

export default function movieListReducer(
  state = movieListInitialState,
  action,
) {
  switch (action.type) {
    case FETCH_MOVIE_LIST:
      return { ...state, isFetching: true };
    case FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...action.payload.results],
        error: null,
      };
    case FETCH_MOVIE_LIST_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
