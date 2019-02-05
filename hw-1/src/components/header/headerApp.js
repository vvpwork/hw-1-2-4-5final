import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// components
import Logo from './logo/logo';
import Nav from './headerNav/nav';
import UserMenu from './userMenu/userMenu';
import avatar from './assets/iron.png';
import CartIcon from '../cart/cartIcon';
import { authSelectors } from '../../redux/modules/auth';
import routes from '../../configs/routes';
// styles
import s from '../../styles/header.module.css';

class Header extends Component {
  state = {};

  render() {
    const { isAuthenticated, userName } = this.props;
    return (
      <header className={s.header}>
        <Logo />
        <Nav />
        <CartIcon />
        {isAuthenticated ? (
          <div>
            <UserMenu avatar={avatar} name={userName} />
          </div>
        ) : (
          <div>
            {' '}
            <Link to={routes.SIGN_UP} className={s.sign}>
              sign up
            </Link>
            /
            <Link to={routes.SIGN_IN} className={s.sign}>
              sign in
            </Link>
          </div>
        )}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  userName: authSelectors.userName(state),
});

export default connect(
  mapStateToProps,
  null,
)(Header);
