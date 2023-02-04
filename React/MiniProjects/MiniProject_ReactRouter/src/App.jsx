import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header className='header'>
        <h1>React Reouter V6 🧪</h1>
      </header>
      <div>
        <nav>
          <NavLink to=''>Home</NavLink>
          <NavLink to='heroes'>Heroes</NavLink>
          <NavLink to='about'>About</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
