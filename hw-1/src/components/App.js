import React, { Component } from 'react';
import Menu from './menu/menu';
import Order from './order/orderTable';
import SignIn from './formSignIn/SignIn';
import SignUp from './formSignUp/SignUp';
import Header from './header/headerApp';
import Modal from './modal/Modal';

import globalStyle from './global.css';

export default class App extends Component {
  state = {
    modalOpen: false,
  };

  modalOpen = () => {
    this.setState({
      modalOpen: true,
    });
  };

  modalClose = () => {
    this.setState({
      modalOpen: false,
    });
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <div className={globalStyle.div}>
        <Header />
        <button type="button" onClick={this.modalOpen}>
          OpenModal
        </button>
        {modalOpen && <Modal modalClose={this.modalClose} />}
        <Menu />
        <Order />
        <SignIn />
        <SignUp />
      </div>
    );
  }
}
