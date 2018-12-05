import React, { Component } from 'react';
import MenuList from './menu.json';
import s from './menu.module.css'
export default class Menu extends Component {
  state = {
    menu: MenuList,
    filter:'',
  };

  handleInput = ({target})=>{
   const {value} = target;
    this.setState({
        filter: value,
    })
    console.log(value);
  }

  filterMenu = (filter, menu)=>{
   return   menu.filter(menu => menu.name.toLowerCase().includes(filter.toLowerCase()))
  }

  render() {
    const { menu, filter } = this.state;

    const menuFilter = this.filterMenu(filter, menu);
    return (
        <div>
            <label>
                filter
            <input 
            type ="text"
            name='user'
            value={filter}
            onChange={this.handleInput}
            />
            </label>
      <ul className ={s.list}>
        {menuFilter.map(({name, price, description, ingredients, image}) => (
          <li className={s.items} key ={name}>
            <img src={image} width ='270' />
            <h2>{name}</h2>
            <span>{price} у.e</span>  
            <p>{description}</p>
            <p>{ingredients}</p>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}
