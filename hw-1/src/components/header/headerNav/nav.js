import React from 'react';

import s from './headerNav.module.css';

const nav = ({ navList = [] }) => (
  <nav>
    <ul className={s.list}>
      {navList.map(n => (
        <li className={s.items}>
          <a className={s.link} href="/">
            {n}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default nav;
