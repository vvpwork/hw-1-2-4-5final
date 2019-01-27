import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);


// import {normalize, schema} from 'normalizr'
// import {getAllMenuItems} from './assets/axiosApi'
// import post from './redux/modules/normalizr/posts.json'


// getAllMenuItems().then(response=> {
//   const menu = response;
//   console.log(menu)
//   const idSchema =new schema.Entity('id')
//   const menuSchema = new schema.Entity('menu',{
//     id:idSchema
//   })
//   const normalizeMenu = normalize(menu, [menuSchema])
//  console.log(normalizeMenu);
// } )

// const author = new schema.Entity('author')
// const postSchema = new schema.Entity('posts',{
//   author
// })
// const deNormPost = post

// const normalPost = normalize(deNormPost, [postSchema])
// console.log(normalPost);


// console.log(menuSchema);