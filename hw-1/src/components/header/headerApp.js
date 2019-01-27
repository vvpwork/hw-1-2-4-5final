import React, { Component } from 'react';
// components
import Logo from './logo/logo';
import Nav from './headerNav/nav';
import UserMenu from './userMenu/userMenu';
import avatar from './assets/avatar.jpg';
import CartIcon from '../cart/cartIcon'
// styles
import s from '../../styles/header.module.css';

const name = 'Bob Ross';

export default class Header extends Component {
  state = {};

  render() {
    return (
      <header className={s.header}>
        <Logo />
        <Nav />
        <CartIcon />
        <UserMenu avatar={avatar} name={name} />
      </header>
    );
  }
}
