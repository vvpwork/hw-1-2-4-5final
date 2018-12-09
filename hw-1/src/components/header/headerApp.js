import React, { Component } from 'react';

import avatar from './assets/avatar.jpg';
import s from './header.module.css';

import Logo from './logo/logo';
import Nav from './headerNav/nav';
import UserMenu from './userMenu/userMenu';

const name = 'Bob Ross';
const navList = ['menu', 'about', 'contact', 'delivery'];

export default class Header extends Component {
  state = {};

  render() {
    return (
      <header className={s.header}>
        <Logo width={100} heigth={100} alt="logo" />
        <Nav navList={navList} />
        <UserMenu avatar={avatar} name={name} />
      </header>
    );
  }
}
