import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Card from '../card/card';
import './styleFavoritos.css';
/* import { getCard } from '../../redux/actions/actionsCreators'; */

export default function Favoritos() {
  const Favoritos = useSelector(state => state.moviesFavourites);
  return (
    <div className="div-movies contenedor">
      <div className="titulo-favoritos">
        <h2>My list</h2>
      </div>

      <div className="contenedor-movies ">
        <div className="contenedor-peliculas">
          {Favoritos.map(c => (
            <Card
              key={c.imdbID}
              id={c.imdbID}
              name={c.Title}
              year={c.Year}
              img={c.Poster}
              type={c.Type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
