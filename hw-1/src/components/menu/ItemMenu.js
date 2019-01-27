import React from 'react';
import Button from '../common/button';

import buttonStyle from '../../styles/button.module.css';
import s from '../../styles/itemMenu.module.css';

const ItemMenu = ({ items, addToCart }) =>
  items.map(({ image, name, price, description, ingredients = [], id }) => (
    <div id={id} className={s.container} key={id}>
      <img src={image} alt={name} className={s.img} />
      <h2>{name}</h2>
      <span className={s.bold}>{price} у.e</span>
      <p>{description}</p>
      <p>Ингредиенты:</p>
      <ul className={s.list}>
        {ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <Button
        click={() => addToCart(id)}
        value="Купить"
        className={buttonStyle.itemButton}
      />
    </div>
  ));

export default ItemMenu;
