import React, { Component } from 'react';
import axios from 'axios';

import s from '../../styles/menu.module.css';

export default class Menu extends Component {
  state = {
    menu: [],
    filter: '',
  };

  componentDidMount = () => {
    axios
      .get('http://localhost:3004/menu')
      .then(response =>
        this.setState({
          menu: response.data,
        }),
      )
      .catch(error => console.log(error));
  };

  handleInput = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  filterMenu = (filter, menu) =>
    menu.filter(menuItem =>
      menuItem.name.toLowerCase().includes(filter.toLowerCase()),
    );

  render() {
    const { menu, filter } = this.state;

    const menuFilter = this.filterMenu(filter, menu);
    return (
      <div>
        <span>filter</span>
        <input
          type="text"
          name="user"
          value={filter}
          onChange={this.handleInput}
        />
        <ul className={s.list}>
          {menuFilter.map(
            ({ name, price, description, ingredients, image }) => (
              <li className={s.items} key={name}>
                <img src={image} alt={name} className={s.img} />
                <h2>{name}</h2>
                <span>{price} у.e</span>
                <p>{description}</p>
                <p>{ingredients}</p>
              </li>
            ),
          )}
        </ul>
      </div>
    );
  }
}
