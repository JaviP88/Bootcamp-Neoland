import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Protected from './Components/Protected/Protected';
import { UserContextProvider } from './Context/userContext';
// Import Pages
import AnimationMovie from './Pages/AnimationMovie/AnimationMovie';
import AnimationMovies from './Pages/AnimationMovies/AnimationMovies';
import AnimeMovie from './Pages/AnimeMovie/AnimeMovie';
import AnimeMovies from './Pages/AnimeMovies/AnimeMovies';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Page404 from './Pages/Page404/Page404';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route
              path="home"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="animationMovies"
              element={
                <Protected>
                  <AnimationMovies />
                </Protected>
              }
            />
            <Route
              path="animeMovies"
              element={
                <Protected>
                  <AnimeMovies />
                </Protected>
              }
            />
            <Route
              path="/animationMovie/:id"
              element={
                <Protected>
                  <AnimationMovie />
                </Protected>
              }
            />
            <Route
              path="/animeMovie/:id"
              element={
                <Protected>
                  <AnimeMovie />
                </Protected>
              }
            />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
