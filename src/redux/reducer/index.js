//importar actionsTYpe
import {
  GET_MOVIES,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  GET_MOVIE_DETAIL,
  CLEAN_DETAIL,
} from '../actions/actionType.js';

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: [
          ...state.moviesFavourites,
          state.moviesLoaded.find(m => m.imdbID === action.payload),
        ],
        /*  state.moviesFavourites.concat(action.payload), */
      };
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          m => m.imdbID !== action.payload
        ),
      };

    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };

    case CLEAN_DETAIL:
      return { ...state, movieDetail: action.payload };
    default:
      return state;
  }
};

export default reducer;
