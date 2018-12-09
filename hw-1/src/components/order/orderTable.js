import React, { Component } from 'react';
import axios from 'axios';
// import OrderHistory from './order-history.json';

export default class Order extends Component {
  state = {
    order: [],
  };

  componentDidMount() {
    axios.get('http://localhost:304/order').then(d =>
      this.setState({
        order: d.data,
      }),
    );
  }

  render() {
    const { order } = this.state;

    return (
      <table>
        <tr>
          <th>Date</th>
          <th>Price</th>
          <th>Delivery address</th>
          <th>Ratings</th>
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
      </table>
    );
  }
}
