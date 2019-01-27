import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { cartAction } from '../../redux/modules/shopingCart';

import s from '../../styles/menu.module.css';
import Button from '../common/button';

const menuItem = ({
  menuItems: { name, price, description, ingredients = [], image, id },
  menuItems,
  match: { url },
  location,
  addToCart,
}) => (
  <li className={s.items} key={name} id={id}>
    <Link
      className={s.link}
      to={{
        pathname: `${url}/${id}`,
        state: { from: location },
      }}
    >
      <img src={image} alt={name} className={s.img} />
      <h2 className={s.title}>{name}</h2>
      <span className={s.span}>{price} у.e</span>
    </Link>
    <Button value="заказать" click={() => addToCart(id)} />
  </li>
);

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  addToCart: cartAction.addToCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(menuItem));
