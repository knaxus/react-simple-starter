import React from 'react';
import PropTypes from 'prop-types';

function MovieInfo({ movie }) {
  const { poster_path: path, overview } = movie;
  return (
    <div className="movie-card">
      <div className="movie-card-inner">
        <div className="movie-card-front">
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${path}`}
            alt="movie-poster"
            className="image"
          />
        </div>
        <div className="movie-card-back">
          <p className="movie-description">{overview}</p>
        </div>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
