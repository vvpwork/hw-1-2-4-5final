import React, { Component } from 'react';
import Menu from './menu/menu';
import Order from './order/orderTable';
import SignIn from './formSignIn/SignIn';
import SignUp from './formSignUp/SignUp';
import Header from './header/headerApp';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Menu /> */}
        {/* <Order /> */}
        {/* <SignIn /> */}

        {/* <SignUp /> */}
      </div>
    );
  }
}
