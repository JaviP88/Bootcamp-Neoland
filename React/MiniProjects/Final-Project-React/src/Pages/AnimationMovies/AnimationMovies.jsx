import './AnimationMovies.css';

import React, { useEffect, useState } from 'react';

import MoviesCards from '../../Components/MoviesCards/MoviesCards';
import { getAnimationMovies } from '../../Services/getAnimationMovies';

const AnimationMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      setMovies(await getAnimationMovies());
    })();
  }, []);

  return (
    <div>
      <MoviesCards data={movies} />
    </div>
  );
};

export default AnimationMovies;
