import './App.css';

import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>🍿📽️ Dibupelis 📽️🍿</h1>
        <nav>
          <NavLink to="home">Home</NavLink>
          <NavLink to="animationMovies">Animation Movies</NavLink>
          <NavLink to="animeMovies">Anime Movies</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Soy el fooooooterrrrr</p>
      </footer>
    </div>
  );
}

export default App;
