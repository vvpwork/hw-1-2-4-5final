import React, { Component } from 'react';
import { connect } from 'react-redux';

import { asyncOperetion } from '../../redux/modules/auth';
import SignUpForm from './SignUp';

import s from '../../styles/sign.module.css';

const innitialState = {
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
    const { formSubmit } = this.props;
    const { password, passwordConfirm, name, email } = this.state;
    if (passwordConfirm !== password) return alert('пароли не совпадают');
    const newUser = {
      name,
      email,
      password,
    };
    formSubmit(newUser);
    this.stateReset();
    return null;
  };

  render() {
    return (
      <div className={s.container}>
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

const mapDispatchToProps = {
  formSubmit: asyncOperetion.signUp,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignUpContainer);
