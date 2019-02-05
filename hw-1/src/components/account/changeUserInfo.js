import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authSelectors, asyncOperetion } from '../../redux/modules/auth';
import s from '../../styles/account.module.css';

const InnitialState = {
  name: '',
  email: '',
  password: '',
};
class ChangeUserInfo extends Component {
  state = InnitialState;

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { userId, changeUser } = this.props;
    changeUser({ ...this.state, id: userId });

    this.setState({
      ...InnitialState,
    });
  };

  render() {
    const { name, password, email } = this.state;
    return (
      <section onSubmit={this.handleSubmit} className={s.userChange}>
        <h2>Редактирвать данные</h2>
        <form>
          <label htmlFor={name}>
            <p>изменить имя</p>
            <input
              id={name}
              name="name"
              value={name}
              type="text"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor={email}>
            <p>изменить email</p>
            <input
              id={email}
              name="email"
              value={email}
              type="email"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={password}>
            <p>изменить пароль</p>
            <input
              id={password}
              name="password"
              value={password}
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">изменить данные</button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  changeUser: asyncOperetion.changeUserInfo,
};

export default connect(
  state => ({
    userId: authSelectors.userId(state),
  }),
  mapDispatchToProps,
)(ChangeUserInfo);
