import React from 'react';
import s from '../../styles/signUp.module.css';

const SignUpForm = ({
  userInfo: { phone, email, name, password, passwordConfirm },
  change,
  submit,
}) => {
  return (
    <form className={s.form} onSubmit={submit}>
      <label>
        <span>Name</span>
        <input
          className={s.inp}
          type="text"
          name="name"
          value={name}
          onChange={change}
          placeholder="name"
          required
        />
      </label>
      <label>
        <span>Email</span>
        <input
          className={s.inp}
          type="email"
          name="email"
          value={email}
          onChange={change}
          placeholder="email"
          required
        />
      </label>
      <label>
        <span>Phone</span>
        <input
          className={s.inp}
          type="phone"
          name="phone"
          value={phone}
          onChange={change}
          placeholder="phone"
          required
        />
      </label>
      <label>
        <span>Password</span>
        <input
          className={s.inp}
          type="password"
          name="password"
          value={password}
          onChange={change}
          placeholder="password"
          required
        />
      </label>
      <label>
        <span>Confirm password</span>
        <input
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
};

export default SignUpForm;
