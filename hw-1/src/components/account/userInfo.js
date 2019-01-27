import React from 'react'

import s from '../../styles/account.module.css'

const UserInfo = ({user:{name='vova', email, tel, photo}})=>(
    <section className= {s.userInfo}>
        <img src={photo} alt={name}/>
        <h2>{name}</h2>
        <p>tel: {tel}</p>
        <p>email: {email}</p>
    </section>

)

export default UserInfo