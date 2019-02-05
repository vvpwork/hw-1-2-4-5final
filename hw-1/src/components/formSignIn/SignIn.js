import React from 'react';
import s from '../../styles/signIn.module.css';

const SignIn = ({ submit, user: { email, password }, changeInput }) => (
  <form className={s.form} onSubmit={submit}>
    <input
      className={s.inp}
      type="email"
      name="email"
      value={email}
      onChange={changeInput}
      placeholder="email"
      required
    />
    <input
      className={s.inp}
      type="password"
      name="password"
      value={password}
      onChange={changeInput}
      placeholder="password"
      required
    />
    <button type="submit">Sign in</button>
  </form>
);

export default SignIn;
