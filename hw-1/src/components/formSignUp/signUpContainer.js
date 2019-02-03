import React, { Component } from 'react';
import { connect } from 'react-redux';

import { asyncOperetion } from '../../redux/modules/auth';
import SignUpForm from './SignUp';

const innitialState = {
  phone: '',
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

class SignUpContainer extends Component {
  state = innitialState;

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  stateReset = () => {
    this.setState({
      ...innitialState,
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { password, passwordConfirm, name, phone, email } = this.state;
    if (passwordConfirm !== password) return alert('пароли не совпадают');
    const newUser = {
      name,
      email,
      password
    };
    console.log(newUser);
    this.props.formSubmit(newUser);
    // console.log(this.state);
    this.stateReset();
  };

  render() {
    return (
      <div>
        <h2>Enter your credential</h2>
        <SignUpForm
          userInfo={this.state}
          change={evt => this.handleChange(evt)}
          submit={evt => this.handleSubmit(evt)}
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  formSubmit: asyncOperetion.signUp,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignUpContainer);
