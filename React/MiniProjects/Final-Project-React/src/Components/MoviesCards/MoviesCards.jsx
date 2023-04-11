import './MoviesCards.css';

import React from 'react';
import { Link } from 'react-router-dom';

import FindImg from '../FindImg/FindImg';

const MoviesCards = ({ data }) => {
  return (
    <>
      {data.results?.map((movie) => (
        <figure key={movie.id}>
          <Link to={`/animationMovies/${movie.id}`}>
            <h1>{movie.original_title}</h1>
            <img
              className="imageMovie"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
            />
            <FindImg movieName={movie.original_title} />
            <p className="description">{movie.overview}</p>
          </Link>
        </figure>
      ))}
    </>
  );
};

export default MoviesCards;
