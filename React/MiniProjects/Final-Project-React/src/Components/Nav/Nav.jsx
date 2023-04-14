import './Nav.css';

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../Context/userContext';

const Nav = () => {
  const { logout, user } = useContext(UserContext);
  return (
    <>
      {user && (
        <section className="nav">
          <h1 className="mainTitle">🍿📽️ DibuPelis 📽️🍿</h1>
          <ul>
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink to="animationMovies">Animation Movies</NavLink>
            </li>
            {/* <li>
              <NavLink to="animeMovies">Anime Movies</NavLink>
            </li> */}
            <li className="logout">
              <NavLink to="/" onClick={() => logout()} className="logout">
                Log out
              </NavLink>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default Nav;
