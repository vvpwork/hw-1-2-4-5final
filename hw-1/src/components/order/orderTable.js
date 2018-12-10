import React, { Component } from 'react';
import axios from 'axios';

const headerTable = ['Date', 'Prise', 'Delivery address', 'Ratings'];
export default class Order extends Component {
  state = {
    order: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:3004/order')
      .then(response =>
        this.setState({
          order: response.data,
        }),
      )
      .catch(error => console.log(error));
  }

  render() {
    const { order } = this.state;

    return (
      <table>
        <tr>
          {headerTable.map(title => (
            <th>{title}</th>
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
      </table>
    );
  }
}
