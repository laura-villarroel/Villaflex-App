import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img1 from '../../image/1.jpg';
import img2 from '../../image/2.jpg';
import img3 from '../../image/3.jpg';
import img4 from '../../image/4.jpg';
import img5 from '../../image/5.jpg';
import img6 from '../../image/6.jpg';
import img7 from '../../image/7.jpg';
import img8 from '../../image/8.jpg';
import img9 from '../../image/9.jpg';
import img10 from '../../image/10.jpg';
import img11 from '../../image/11.jpg';
import img12 from '../../image/12.jpg';
import img13 from '../../image/13.jpg';
import img14 from '../../image/14.jpg';
import img15 from '../../image/15.jpg';
import img16 from '../../image/16.jpg';
import img17 from '../../image/17.jpg';
import img18 from '../../image/18.jpg';
import img19 from '../../image/19.jpg';
import img20 from '../../image/20.jpg';
import {
  faCircleInfo,
  faAngleLeft,
  faAngleRight,
  faAngleDown,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import './slyleLanding.css';
// paso 4 importar link
/* import { getCard } from '../../redux/actions/actionsCreators'; */

const imagenes = [
  { img: img1, id: 'tt1877830' },
  { img: img2, id: 'tt12593682' },
  { img: img3, id: 'tt9419884' },
  { img: img4, id: 'tt0110912' },
  { img: img5, id: 'tt14212142' },
  { img: img6, id: 'tt9140554' },
  { img: img7, id: 'tt4593060' },
  { img: img8, id: 'tt8912936' },
  { img: img9, id: 'tt10648342' },
  { img: img10, id: 'tt2617828' },
  { img: img11, id: 'tt5311514' },
  { img: img12, id: 'tt6751668' },
  { img: img13, id: 'tt0108052' },
  { img: img14, id: 'tt0109830' },
  { img: img15, id: 'tt0253474' },
  { img: img16, id: 'tt0102926' },
  { img: img17, id: 'tt8503618' },
  { img: img18, id: 'tt6105098' },
  { img: img19, id: 'tt1675434' },
  { img: img20, id: 'tt2380307' },
];
export default function LandingPage() {
  useEffect(() => {
    const fila = document.querySelector('.contenedor-carousel');

    const flechaIzquierda = document.getElementById('flecha-izquierda');
    const flechaDerecha = document.getElementById('flecha-derecha');
    flechaDerecha.addEventListener('click', () => {
      fila.scrollLeft += fila.offsetWidth;
      console.log(fila.scrollLeft);
    });

    flechaIzquierda.addEventListener('click', () => {
      fila.scrollLeft -= fila.offsetWidth;
      console.log(fila.scrollLeft);
    });
  });

  return (
    <main>
      <div className="pelicula-principal">
        <div className="contenedor">
          <h3 className="titulo">Loki</h3>
          <p className="descripcion">
            After stealing the Tesseract during the events of “Avengers:
            Endgame,” an alternate version of Loki is brought to the mysterious
            Time Variance Authority, a bureaucratic organization that exists
            outside of time and space and monitors the timeline. They give Loki
            a choice: face being erased from existence due to being a “time
            variant” or help fix the timeline and stop a greater threat.
          </p>
          <Link to={`/detail/tt9140554`}>
            <button className="botoninfo">
              <FontAwesomeIcon icon={faCircleInfo} className="fa-xl icono" />{' '}
              More Info
            </button>{' '}
          </Link>
        </div>
      </div>

      <div className="peliculas-recomendadas contenedor">
        <div className="contenedor-titulo-controles">
          <h3>Peliculas Recomendadas</h3>
          <div className="indicadores">
            {/*  <button></button>
            <button></button>
            <button></button> */}
          </div>
        </div>

        <div className="contenedor-principal">
          <button className="flecha-izquierda" id="flecha-izquierda">
            <FontAwesomeIcon icon={faAngleLeft} className="icono" />
          </button>
          <div className="contenedor-carousel">
            <div className="carousel">
              {imagenes.map(p => (
                <div className="peli">
                  <Link to={`/detail/${p.id}`}>
                    <img src={p.img} alt="" />
                  </Link>
                </div>
              ))}

              {/*  <div className="peli">
                <Link to={`/detail`}>
                  <img src={img1} alt="" />
                </Link>
              </div>
              <div className="peli">
                <Link to={`/detail`}>
                  <img src={img2} alt="" />
                </Link>
              </div>
              <div className="peli">
                <Link to={`/detail`}>
                  <img src={img3} alt="" />
                </Link>
              </div>
              <div className="peli">
                <Link to={`/detail`}>
                  <img src={img4} alt="" />
                </Link>
              </div>
              <div className="peli">
                <Link to={`/detail`}>
                  <img src={img5} alt="" />
                </Link>
              </div>
              <div className="peli">
                <Link to={`/detail`}>
                  <img src={img6} alt="" />
                </Link>
              </div>
              <div className="peli">
                <Link to={`/detail`}>
                  <img src={img7} alt="" />
                </Link>
              </div>
              <div className="peli">
                <Link to={`/detail`}>
                  <img src={img8} alt="" />
                </Link>
              </div>
              <div className="peli">
                <Link to={`/detail`}>
                  <img src={img9} alt="" />
                </Link>
              </div>
              */}
            </div>
          </div>
          <button className="flecha-derecha" id="flecha-derecha">
            <FontAwesomeIcon icon={faAngleRight} className=" icono" />
          </button>
        </div>
      </div>
    </main>
  );
}
