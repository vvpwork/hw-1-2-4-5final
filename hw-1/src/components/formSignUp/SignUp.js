import React, { Component } from 'react';
import s from '../../styles/signUp.module.css';

export default class SignUp extends Component {
  state = {
    phone: '',
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { password, passwordConfirm } = this.state;
    if (passwordConfirm !== password) return alert('пароли не совпадают');
    return console.log(this.state);
  };

  render() {
    const { phone, email, name, password, passwordConfirm } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          className={s.inp}
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="name"
          required
        />
        <input
          className={s.inp}
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="email"
          required
        />
        <input
          className={s.inp}
          type="phone"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          placeholder="phone"
          required
        />
        <input
          className={s.inp}
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="password"
          required
        />
        <input
          className={s.inp}
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={this.handleChange}
          placeholder="passwordConfirm"
          required
        />
        <button type="submit">Sign in</button>
      </form>
    );
  }
}
