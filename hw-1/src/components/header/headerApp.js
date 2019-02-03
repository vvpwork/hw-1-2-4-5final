import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// components
import Logo from './logo/logo';
import Nav from './headerNav/nav';
import UserMenu from './userMenu/userMenu';
import avatar from './assets/iron.png';
import CartIcon from '../cart/cartIcon';
import Button from '../common/button'
import { authSelectors, asyncOperetion } from '../../redux/modules/auth';
import routes from '../../configs/routes';
// styles
import s from '../../styles/header.module.css';

const name = 'IronMan';

class Header extends Component {
  state = {};

  render() {
    const { isAuthenticated,signOut } = this.props;
    return (
      <header className={s.header}>
        <Logo />
        <Nav />
        <CartIcon />
        {isAuthenticated ? (
          <div><UserMenu avatar={avatar} name={name} /></div>
        ) : (
          <div>
            {' '}
            <Link to={routes.SIGN_UP} style={{ marginRight: '10px' }}>
              sign up
            </Link>
            <Link to={routes.SIGN_IN}>sign in</Link>
          </div>
        )}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});



export default connect(
  mapStateToProps, null
)(Header);
