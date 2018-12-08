import React from 'react';
import img from '../assets/logo.png';

const logo = ({ width, heigth, alt }) => (
  <img src={img} width={width} heidth={heigth} alt={alt} />
);

export default logo;
