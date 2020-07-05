import {
  FETCH_MOVIE_LIST,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_LIST_FAILURE,
} from './constants';

export function fetchMovieList() {
  return {
    type: FETCH_MOVIE_LIST,
  };
}

export function fetchMovieListSuccess(movieList) {
  return {
    type: FETCH_MOVIE_LIST_SUCCESS,
    payload: movieList,
  };
}

export function fetchMovieListFailure(error) {
  return {
    type: FETCH_MOVIE_LIST_FAILURE,
    payload: { error },
  };
}
