import axios from 'axios';
import {
  GET_MOVIES,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  GET_MOVIE_DETAIL,
  CLEAN_DETAIL,
} from './actionType';

const apikey = '1bc6c554'; // otra 20dac387

export const getMovies = titulo => {
  return async function (dispatch) {
    return axios
      .get(`https://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`)
      .then(json => {
        dispatch({ type: GET_MOVIES, payload: json.data }); // json.Search
      })
      .catch(error => console.log(error));
  };
};

export const getMovieDetail = idMovie => {
  return async function (dispatch) {
    return axios
      .get(`https://www.omdbapi.com/?apikey=${apikey}&i=${idMovie}`)
      .then(json => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: json.data }); // json.Search
      })
      .catch(error => console.log(error));
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
    payload: {},
  };
};

export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVORITE, payload };
}

export function removeMovieFavorite(id) {
  return { type: REMOVE_MOVIE_FAVORITE, payload: id };
}
