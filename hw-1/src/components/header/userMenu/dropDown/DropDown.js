import React from 'react';

import s from '../../../../styles/DropDown.module.css';

const DropDown = ({ account, order, planner }) => (
  <div className={s.container}>
    <ul className={s.list}>
      <li className={s.items}>
        <a className={s.link} href={account}>
          {' '}
          Account{' '}
        </a>
      </li>
      <li className={s.items}>
        <a className={s.link} href={order}>
          {' '}
          Order History
        </a>
      </li>
      <li className={s.items}>
        <a className={s.link} href={planner}>
          {' '}
          Meal Planner{' '}
        </a>
      </li>
    </ul>
    <button type="button">Logout</button>
  </div>
);

export default DropDown;
