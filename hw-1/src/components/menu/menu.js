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
        {menuFilter.map(item => (
          <li className={s.items} key ={item.name}>
            <img src={item.image} />
            <h2>{item.name}</h2>
            <span>{item.price} у.e</span>  
            <p>{item.description}</p>
            <p>{item.ingredients}</p>
          </li>
        ))}
      </ul>
      </div>
    );
  }
}
