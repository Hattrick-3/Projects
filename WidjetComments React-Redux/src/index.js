import React from 'react';
import ReactDom from 'react-dom';

import App from './containers/app';
import {createStore} from 'redux';
import comments from './reducers';


let localComments;

if (localStorage.getItem('comments') === null){
    localComments = [];
} else {
    localComments = JSON.parse(localStorage.getItem('comments'));
}
const initialState = localComments;

const store = createStore(comments, initialState);

ReactDom.render(
  <App store={store}/>,
  document.querySelector('.app')
)
