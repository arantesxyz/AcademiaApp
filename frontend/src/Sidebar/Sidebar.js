import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
        <a class="active" href="#home">Cadastro de usuário</a>
        <a  href="#login">Login</a>
      </div>
    );
  }
}

export default Sidebar;





