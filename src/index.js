import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import To_do from './To_do';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <To_do />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your To_do, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
