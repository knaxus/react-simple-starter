import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchMovieListSuccess,
  fetchMovieListFailure,
} from './actions';
import MovieInfo from './component';
import { ERROR_TEXT } from './constants';
import { getDataFromAPI } from '../HandleAPICalls/actions';

const URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=1e2bbb1e97b4751a4945af538fa72a41';

function Movie({
  getDataFromAPI: getData,
  fetchMovieListSuccess: fetchMovieSucces,
  fetchMovieListFailure: fetchMovieFailure,
  movies: { data, error },
}) {
  useEffect(() => {
    getData(URL, 'GET', undefined, fetchMovieSucces, fetchMovieFailure);
  }, [getData, fetchMovieFailure, fetchMovieFailure]);
  return (
    <div className="align-center">
      {!data.length && <div className="lds-dual-ring" />}
      {error && <p className="align-center error-text">{ERROR_TEXT}</p>}
      <div className="movie-container">
        {data.map(movie => (
          <div className="items m-t-1" key={movie.original_title}>
            <MovieInfo movie={movie} />
          </div>
      ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { movies: state.movieList };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getDataFromAPI,
      fetchMovieListFailure,
      fetchMovieListSuccess,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);

Movie.propTypes = {
  movies: PropTypes.object,
  getDataFromAPI: PropTypes.func,
  fetchMovieListSuccess: PropTypes.func,
  fetchMovieListFailure: PropTypes.func
};
