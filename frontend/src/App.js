import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import CadstroPessoa from './CadastroPessoa/CadastroPessoa'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Sidebar></Sidebar>
        <p className="App-intro">
          <div>
        <CadstroPessoa></CadstroPessoa>
          </div>
        </p>
      </div>
    );
  }
}

export default App;


