import React, { Component } from 'react';
import { connect } from 'react-redux';

//componet
import SignIn from './SignIn';
import {asyncOperetion} from '../../redux/modules/auth'
class SignInContainer extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state)
    console.log(this.state);
  };

  render() {
    return (
      <SignIn
        user={this.state}
        changeInput={evt => this.handleChange(evt)}
        submit={evt => this.handleSubmit(evt)}
      />
    );
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  signIn: asyncOperetion.signIn
}

export default connect(null, mapDispatchToProps)(SignInContainer)
