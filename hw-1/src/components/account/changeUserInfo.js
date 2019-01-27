import React, { Component } from 'react';
import s from '../../styles/account.module.css'

export default class ChangeUserInfo extends Component {
  state = {
    name: '',
    surname:'',
    tel: '',
    email: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt)=>{
    evt.preventDefault()
      console.log(this.state)
  }
  render() {
      const {name, tel, surname, email} = this.state
    return(
      <section onSubmit={this.handleSubmit} className={s.userChange}>
      <h2>Редактирвать данные</h2>
        <form>
          <label>
            <p>введите новое имя</p>
            <input name="name" value={name} type="text" onChange={this.handleChange} />
          </label>
          <label>
            <p>введите новою фамилию</p>
            <input name="surname" value={surname} type='text' onChange={this.handleChange} />
          </label>
          <label>
            <p>введите телефон</p>
            <input name="tel" value={tel} type='telephone' onChange={this.handleChange} />
          </label>
          <label>
            <p>введите email</p>
            <input name="email" value={email} type="email" onChange={this.handleChange} />
          </label>
          <button type='submit'>изменить данные</button>
        </form>
      </section>
    )
  }
}
