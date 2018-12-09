import React, { Component } from 'react';
import axios from 'axios';
// import MenuList from './menu.json';
import s from './menu.module.css';

export default class Menu extends Component {
  state = {
    menu: [],
    filter: '',
  };

  componentDidMount = () => {
    axios
      .get('http://localhost:304/menu')
      .then(d =>
        this.setState({
          menu: d.data,
        }),
      )
      .catch(error => console.log(error));
  };

  handleInput = ({ target }) => {
    const { value } = target;
    this.setState({
      filter: value,
    });
  };

  filterMenu = (filter, menu) =>
    menu.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()));

  render() {
    const { menu, filter } = this.state;

    const menuFilter = this.filterMenu(filter, menu);
    return (
      <div>
        filter
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
                <img src={image} width="270" alt={name} />
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
