console.log('Hello Webpack!');

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

// const curElem = <h1>Hello React!</h1>;
const curDivById = document.getElementById('app');

// ReactDOM.render(curElem, curDivById);
ReactDOM.render(<Main />, curDivById);
