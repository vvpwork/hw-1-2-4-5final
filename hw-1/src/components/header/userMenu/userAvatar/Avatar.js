import React from 'react';
// import img from '../../assets/avatar.jpg';

const Avatar = ({ alt, width, heigth, src }) => (
  <img src={src} width={width} heigth={heigth} alt={alt} />
);

export default Avatar;
