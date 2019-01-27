import React from 'react';
import { Link } from 'react-router-dom';

import userMenuList from '../../../../configs/userMenu'
import s from '../../../../styles/DropDown.module.css';

const DropDown = () => (
  <div className={s.container}>
    <ul className={s.list}>
     {userMenuList.map(({name, path})=><li className={s.items} key={name}><Link to={path} className={s.link}>{name}</Link></li>)} 
      </ul>
    <button type="button">Logout</button>
  </div>
);

export default DropDown;
