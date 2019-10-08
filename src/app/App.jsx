import React from 'react';
import Movie from '../MovieInfo/container';
import { POPULAR_MOVIES } from '../MovieInfo/constants';

export default function App() {
  return (
    <div>
      <h2>{POPULAR_MOVIES}</h2>
      <Movie />
    </div>
  );
}
