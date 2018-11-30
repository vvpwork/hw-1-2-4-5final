import React, { Component } from 'react';
import Menu from './menu/menu';
import Order from "./order/orderTable"



export default class App extends Component {
  

  render() {
    return (
        <div>
        <Menu />
        <Order />
        </div>
    )
  }
}
