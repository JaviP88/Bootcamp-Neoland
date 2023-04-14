import './MoviesCards.css';

import React from 'react';
import { Link } from 'react-router-dom';

import FindImg from '../FindImg/FindImg';

const MoviesCards = ({ data }) => {
  return (
    <section className="cardsContainer">
      {data.results?.map((movie) => (
        <figure key={movie.id} className="movieCard">
          <Link to={`/animationMovies/${movie.id}`}>
            <h1 className="title">{movie.original_title}</h1>
            <div className="imgContainer">
              <img
                className="imgMovie"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
              />
              <FindImg movieName={movie.original_title} />
            </div>
            <p className="description">{movie.overview}</p>
          </Link>
        </figure>
      ))}
    </section>
  );
};

export default MoviesCards;
