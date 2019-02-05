import React from 'react';
import { NavLink } from 'react-router-dom';

// components
import mainMenu from '../../../configs/mainMenu';

import s from '../../../styles/headerNav.module.css';

const nav = () => (
  <nav>
    <ul className={s.list}>
      {mainMenu.map(({ name, path }) => (
        <li className={s.items} key={name}>
          <NavLink to={path} exact className={s.link}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default nav;
