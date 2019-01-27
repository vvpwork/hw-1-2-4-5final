import React from 'react';

import s from '../../styles/menu.module.css';
import Item from './menuItem'
const Menu = ({filterMenuList}) =>(
  <div>
  <ul className={s.list}>
    {filterMenuList().map(items=> <Item menuItems={items} key={items.name} />)}      
  </ul>
</div>  
)

export default Menu;
  

