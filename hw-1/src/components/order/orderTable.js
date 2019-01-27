import React, { Component } from 'react';

import { getAllOrders } from '../../assets/axiosApi';
import s from '../../styles/order.module.css';
const headerTable = ['Date', 'Prise', 'Delivery address', 'Ratings'];
export default class Order extends Component {
  state = {
    order: [],
  };

  componentDidMount() {
    getAllOrders()
      .then(response =>
        this.setState({
          order: response,
        }),
      )
      .catch(error => console.log(error));
  }

  render() {
    const { order } = this.state;

    return (
      <table className={s.table}>
        <tbody>
          <tr>
            {headerTable.map(title => (
              <th key={title}>{title}</th>
            ))}
          </tr>
          {order.map(({ date, price, address, rating, id }) => (
            <tr key={id}>
              <td>{date}</td>
              <td>{price}</td>
              <td>{address}</td>
              <td>{rating}</td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
