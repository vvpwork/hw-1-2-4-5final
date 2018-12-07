import React, { Component } from 'react';

import logo from './assets/logo.png';
import avatar from './assets/avatar.jpg';
import s from './header.module.css';

import Logo from './logo/logo';
import Nav from './headerNav/Nav';
import UserMenu from './userMenu/UserMenu';

const name = 'Bob Ross';
const navList = ['menu', 'about', 'contact', 'delivery'];

export default class Header extends Component {
  render() {
    return (
      <header className={s.header}>
        <Logo src={logo} width={100} heigth={100} />
        <Nav navList={navList} />
        <UserMenu avatar={avatar} name={name} />
      </header>
    );
  }
}
