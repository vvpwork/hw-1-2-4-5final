import React, { Component } from 'react';
// components
import Logo from './logo/logo';
import Nav from './headerNav/nav';
import UserMenu from './userMenu/userMenu';
import avatar from './assets/avatar.jpg';
// styles
import s from './header.module.css';

const name = 'Bob Ross';

export default class Header extends Component {
  state = {};

  render() {
    return (
      <header className={s.header}>
        <Logo />
        <Nav />
        <UserMenu avatar={avatar} name={name} />
      </header>
    );
  }
}
