import React, { Component } from 'react';
import s from './signIn.module.css'

export default class Login extends Component {
    state ={
        email:'',
        password: '',
    }

    handleChange = ({target})=>{
        this.setState({
            [target.name]: target.value,            
        })
    }

    handleSubmit = (ev)=>{
        ev.preventDefault()
        console.log(this.state);
    }
    render(){
        const{email, password} = this.state

        return(
            <form className={s.form}
            onSubmit = {this.handleSubmit}
            >
                <input className={s.inp}
                type="email"
                name='email'
                value= {email}
                onChange = {this.handleChange}
                placeholder= 'email'
                required
                />
                <input className = {s.inp}
                type="password"
                name='password'
                value= {password}
                onChange = {this.handleChange}
                placeholder ='password'
                required
                />
                <button type='submit'>Sign in</button>
            </form>
        )
    }
}