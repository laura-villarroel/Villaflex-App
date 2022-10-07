import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styleCard.css';

import img1 from '../../image/1.jpg';

import {
  faCircleInfo,
  faAngleLeft,
  faAngleRight,
  faAngleDown,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import './styleCard.css';

import {
  addMovieFavorite,
  removeMovieFavorite,
} from '../../redux/actions/actionsCreators';

export default function Card({ id, name, year, img, type }) {
  const dispatch = useDispatch();

  const onPlus = e => {
    dispatch(addMovieFavorite(e));
  };
  const onClose = e => {
    dispatch(removeMovieFavorite(e));
    console.log(e);
  };
  return (
    <div className="pelicula">
      <Link to={`/detail/${id}`}>
        <img src={img} alt="" />
      </Link>
      <p>{name}</p>
      <div className="info">
        <div className="info-peli">
          <p>{year}</p>
          <p>{type}</p>
        </div>
        <div className="controles">
          <button
            className="mas"
            id=""
            onClick={e => {
              onPlus(id);
            }}
          >
            <FontAwesomeIcon icon={faPlus} className=" icono" />
          </button>
          <Link to={`/detail/${id}`}>
            <button className="" id="">
              <FontAwesomeIcon icon={faAngleDown} className=" icono" />
            </button>
          </Link>
          <button
            className="menos"
            id=""
            onClick={e => {
              onClose(id);
            }}
          >
            <FontAwesomeIcon icon={faMinus} className=" icono" />
          </button>
        </div>
      </div>
    </div>
  );
}
