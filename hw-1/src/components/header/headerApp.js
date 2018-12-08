import React, { Component } from 'react';

import avatar from './assets/avatar.jpg';
import s from './header.module.css';

import Logo from './logo/logo';
import Nav from './headerNav/nav';
import UserMenu from './userMenu/userMenu';

const name = 'Bob Ross';
const navList = ['menu', 'about', 'contact', 'delivery'];

export default class Header extends Component {
  state = {
    userName: '',
    userAvatar: null,
  };

  componentDidMount() {
    this.setState({
      userName: name,
      userAvatar: avatar,
    });
  }

  render() {
    const { userName, userAvatar } = this.state;
    return (
      <header className={s.header}>
        <Logo width={100} heigth={100} alt="logo" />
        <Nav navList={navList} />
        <UserMenu avatar={userAvatar} name={userName} />
      </header>
    );
  }
}
