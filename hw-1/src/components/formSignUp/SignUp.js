import React from 'react';
import s from '../../styles/signUp.module.css';

const SignUpForm = ({
  userInfo: { email, name, password, passwordConfirm },
  change,
  submit,
}) => (
  <form className={s.form} onSubmit={submit}>
    <label htmlFor="name">
      <span>Name</span>
      <input
        id="name"
        className={s.inp}
        type="text"
        name="name"
        value={name}
        onChange={change}
        placeholder="name"
        required
      />
    </label>
    <label htmlFor="email">
      <span>Email</span>
      <input
        id="email"
        className={s.inp}
        type="email"
        name="email"
        value={email}
        onChange={change}
        placeholder="email"
        required
      />
    </label>
    <label htmlFor="password">
      <span>Password</span>
      <input
        id="password"
        className={s.inp}
        type="password"
        name="password"
        value={password}
        onChange={change}
        placeholder="password"
        required
      />
    </label>
    <label htmlFor="passwordConfirm">
      <span>Confirm password</span>
      <input
        id="passwordConfirm"
        className={s.inp}
        type="password"
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={change}
        placeholder="passwordConfirm"
        required
      />
    </label>
    <button type="submit">Sign up</button>
  </form>
);

export default SignUpForm;
