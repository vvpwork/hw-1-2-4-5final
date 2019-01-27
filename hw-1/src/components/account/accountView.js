import React from 'react'

import UserInfo from './userInfo'
import ChangeUserInfo from './changeUserInfo'

import s from '../../styles/account.module.css'
import passProps from '../hoc/passProps'

const user= {
    name: 'ironMan',
    tel: "0950000001",
    email: 'red@red.com',
    photo:"https://image.shutterstock.com/image-vector/hero-mask-on-red-background-450w-389497207.jpg"
}

const Account = (props)=>{
    return (
        <div className = {s.container}>
        <UserInfo {...props}/>
        <ChangeUserInfo />
        </div>
    )
}

export default passProps({user})(Account);