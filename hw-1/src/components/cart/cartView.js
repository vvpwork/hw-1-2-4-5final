import React from 'react';
import s from '../../styles/cart.module.css';

const cartView = ({
  products = [],
  deletProduct,
  cartIncrement,
  cartDecrement,
}) =>
  products.length > 0 ? (
    <table className={s.table}>
      <tbody>
        <tr>
          <th>Названия блюда</th>
          <th>к-во</th>
          <th>Стоимость</th>
          <th>Правка</th>
        </tr>
        {products.map(({ id, name, amount, price }) => (
          <tr key={id} className={s.tr}>
            <td>{name}</td>
            <td>
              <button className={s.button} onClick={() => cartIncrement(id)}>
                +
              </button>
              {amount}
              <button className={s.button} onClick={() => cartDecrement(id)}>
                -
              </button>
            </td>
            <td> {price} у.е</td>
            <td>
              <button onClick={() => deletProduct(id)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>В корзине нет товаров!</h1>
  );

export default cartView;
