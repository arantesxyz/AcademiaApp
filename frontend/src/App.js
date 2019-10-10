import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import CadstroPessoa from "./CadastroPessoa/CadastroPessoa";
import CadastroTurma from "./CadastroTurma/CadastroTurma";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Sidebar></Sidebar>
                <div className="App-intro">
                    <div>
                        <CadstroPessoa></CadstroPessoa>
                        <CadastroTurma></CadastroTurma>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
