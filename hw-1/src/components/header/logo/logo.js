import React from 'react';
import {Link} from 'react-router-dom'

import img from '../assets/logo.png';
import s from '../../../styles/logo.module.css';

const logo = () => <Link to='/'><img src={img} alt="Logo" className={s.logo} /></Link>;

export default logo;
