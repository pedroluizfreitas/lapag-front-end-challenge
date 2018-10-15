import React, { Component } from "react";
import logo from "./logo-white.png";
import "./App.css";
import Agenda from './main/agenda'
import { Provider } from 'react-redux'
import store from './redux/store'
import './../node_modules/antd/dist/antd.css'
import './../node_modules/antd/dist/antd.js'
import './../node_modules/antd/dist/antd.min.css'
import './../node_modules/antd/dist/antd.min.js'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title" style={{color: 'white'}}>Front-End Challenge</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">Start the test here!</p>
        <Provider store={store}>
          <Agenda />
        </Provider>
      </div>
    );
  }
}

export default App;
