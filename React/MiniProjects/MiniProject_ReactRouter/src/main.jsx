import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

import Home from './Pages/Home/Home'
import Heroes from './Pages/Heroes/Heroes'
import Heroe from './Pages/Heroe/Heroe'
import About from './Pages/About/About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='heroes' element={<Heroes />} />
          <Route path='/heroe/:id' element={<Heroe />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={
            <main>
              <p>404 - No existe la ruta! Miralo bien.</p>
            </main>
          }>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
