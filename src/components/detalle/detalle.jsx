import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  cleanDetail,
  getMovieDetail,
} from '../../redux/actions/actionsCreators';
import './styleDetalle.css';

export default function Detalle() {
  const dispatch = useDispatch();
  const { movieID } = useParams();
  const movie = useSelector(state => state.movieDetail);

  useEffect(() => {
    dispatch(getMovieDetail(movieID));
    console.log(movieID);
    return () => {
      dispatch(cleanDetail());
    };
  }, [movieID]);
  return (
    <div className="contenedor-detalle contenedor">
      <img src={movie.Poster} alt="" className="image-detalle" />
      <div className="info-detalle">
        <div className="titulo-detalle">
          <h2>
            {movie.Title} <span>({movie.Year})</span>
          </h2>
        </div>
        <div className="genero-detalle">
          <p>{movie.Genre} </p>

          <p> ({movie.Runtime})</p>
        </div>

        <div className="rating">
          <h3>{movie.imdbRating * 10}%</h3>
          <progress
            value={movie.imdbRating * 10}
            max="100"
            className="barra"
          ></progress>
        </div>
        <div className="resumen">
          <h2>Overview</h2>
          <p>{movie.Plot}</p>
        </div>
        <div className="cast">
          <h3>Cast</h3>
          <p>{movie.Actors}</p>
        </div>
        <div className="type">
          <h3>
            Type: <span>({movie.Type})</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
