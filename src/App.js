import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router';

import Navbar from './components/Navbar/navbar.jsx';
import LandingPage from './components/landingPage/landingPage.jsx';
import Movies from './components/movies/movies.jsx';
import Favoritos from './components/favoritos/favoritos.jsx';
import Detalle from './components/detalle/detalle.jsx';

/* import './style/custom.css'; */

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/my-list" element={<Favoritos />} />
        <Route path="/movies/:name" element={<Movies />} />
        <Route path="/detail/:movieID" element={<Detalle />} />
      </Routes>
    </div>
  );
}

export default App;
