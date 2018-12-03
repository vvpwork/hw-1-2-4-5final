import React, { Component } from 'react';
import Menu from './menu/Menu';
import Order from './order/orderTable';
import SignIn from './formSignIn/SignIn';
import SignUp from './formSignUp/SignUp';
import Header from './header/HeaderApp';
import Modal from './modal/Modal'


import globalStyle from './global.css'

export default class App extends Component {

    state  = {
        modalOpen: false,
    }

    modalOpen=(ev) =>{
        this.setState({
            modalOpen: true,
        })
    }

    modalClose = (ev)=>{
        this.setState({
            modalOpen: false,
        })
    }


  render() {
      const{modalOpen} = this.state;
    return (
      <div>
        <Header />
        <button type='button' onClick={this.modalOpen}>OpenModal</button>
        {modalOpen && <Modal modalClose = {this.modalClose} />}
        {/* <Menu /> */}
        {/* <Order /> */}
        {/* <SignIn /> */}

        {/* <SignUp /> */}
      </div>
    );
  }
}
