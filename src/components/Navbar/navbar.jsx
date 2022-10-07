import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './styleNavbar.css';
import { getMovies } from '../../redux/actions/actionsCreators';

export default function Navbar() {
  const [name, setName] = useState();

  const handleImputChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name) {
      window.location.href = `https://villaflex-app-movie.vercel.app/movies/${name}`;
    }

    /*   setTimeout(function () {
      
    }, 5000); */

    setName('');
  };
  return (
    <header>
      <div className="contenedor">
        <Link to={`/`} className="enlace-logo">
          <h2 className="logo">VillaFlex</h2>
        </Link>

        <nav>
          {
            <ul className="navbarlink">
              <li>
                <Link to={`/`} className="enlace ">
                  Home
                </Link>
              </li>
              <li>
                <Link to={`/my-list`} className="enlace ">
                  My List
                </Link>
              </li>
            </ul>
          }
        </nav>
        <div className="">
          <Link></Link>
          <form
            action=""
            role="search"
            className="buscar"
            onSubmit={e => handleSubmit(e)}
            /*  onClick={(window.location.href = 'http://localhost:3000/movies')} */
          >
            <input
              className="buscar-texto"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={name}
              onChange={e => {
                handleImputChange(e);
              }}
            />
            <button className="boton">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-xl" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
