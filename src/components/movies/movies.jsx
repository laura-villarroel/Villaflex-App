import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import Card from '../card/card';
import { getMovies, cleanDetail } from '../../redux/actions/actionsCreators';
import './styleMovies.css';
// paso 4 importar link
/* import { getCard } from '../../redux/actions/actionsCreators'; */
import img1 from '../../image/gif-loading.gif';

export default function Movies() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const Movies = useSelector(state => state.moviesLoaded);

  useEffect(() => {
    dispatch(getMovies(name));
    return () => {
      dispatch(cleanDetail());
    };
  }, []);
  return (
    <div className="contenedor-movies contenedor">
      <div className="contenedor-peliculas-search">
        {Movies.map(c => (
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
  );
}
