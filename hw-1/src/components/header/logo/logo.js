import React from 'react';
import img from '../assets/logo.png';
import s from '../../../styles/logo.module.css';

const logo = () => <img src={img} alt="Logo" className={s.logo} />;

export default logo;
