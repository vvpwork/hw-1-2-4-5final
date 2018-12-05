import React from 'react';

import s from './headerNav.module.css'

const nav = ({navList = []}) => {
  return (
    <nav>
      <ul className={s.list}>
        {navList.map(nav => (
          <li className={s.items}>
            <a className={s.link} href="/">{nav}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default nav;
