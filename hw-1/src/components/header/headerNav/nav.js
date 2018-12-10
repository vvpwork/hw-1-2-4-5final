import React from 'react';
import s from './headerNav.module.css';

const navList = ['menu', 'about', 'contact', 'delivery'];

const nav = () => (
  <nav>
    <ul className={s.list}>
      {navList.map(navItems => (
        <li className={s.items}>
          <a className={s.link} href="/">
            {navItems}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default nav;
