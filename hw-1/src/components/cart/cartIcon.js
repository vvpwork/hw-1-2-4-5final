import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartSelectors } from '../../redux/modules/shopingCart';

import routes from '../../configs/routes';
import img from '../header/assets/shoping-cart-min.jpg';

import s from '../../styles/shopingCart.module.css';

const cartIcon = ({ cart }) => (
  <Link to={routes.CART} className={s.link}>
    <img src={img} alt="cart" className={s.img} />
    <span className={s.span}>{cart.length}</span>
  </Link>
);
const mapState = state => ({
  cart: cartSelectors.getCartId(state),
});
export default connect(
  mapState,
  null,
)(cartIcon);
