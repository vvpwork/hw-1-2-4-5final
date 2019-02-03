import React from 'react';

import s from '../../styles/account.module.css';

const UserInfo = ({ name = 'vova', email, photo }) => (
  <section className={s.userInfo}>
    <img src={photo} alt={name} />
    <h2>{name}</h2>
    <p>email: {email}</p>
  </section>
);

export default UserInfo;
