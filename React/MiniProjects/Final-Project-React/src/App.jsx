import './App.css';

import { Outlet } from 'react-router-dom';

import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>🌰 Realizada por mi.</p>
      </footer>
    </div>
  );
}

export default App;
