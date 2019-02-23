import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css'
import App from './App'
import Form from './Form'


ReactDOM.render(
  <App /> ,
  document.getElementById('root')
);
ReactDOM.render(
  <Form />,
  document.getElementById('main')
)