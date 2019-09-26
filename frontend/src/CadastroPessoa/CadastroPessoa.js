import React, { Component } from 'react';
import './CadastroPessoa.css';

class CadastroPessoa extends Component {
  render() {
    return (
    <div className="container">
        <div className="cadastro">
            <div className="dadosContainer">
                <strong className="contentRegistro">
                    Cadastro de usuários
                </strong>
                <div className="inputs" id="nome">
                <div className="nomeCampo">Nome: </div><input ></input>
                </div>
                <div className="inputs" id="telefone">
                <div className="nomeCampo"> Telefone: </div><input ></input>
                </div>
                <div className="inputs" id="email">
                <div className="nomeCampo"> E-mail: </div> <input ></input>
                </div>
                <div className="inputs" id="endereco">
                <div className="nomeCampo">  Endereço: </div> <input></input>
                </div>
                <div className="inputs" id="dataNascimento">
                <div className="nomeCampo">Data de nascimento: </div> <input ></input>
                </div>
                <div className="inputs" id="instagram">
                    <div className="nomeCampo">Instagram: </div>
                    <input ></input>
                </div>
                <div className="inputs">
                <input type="submit" value="Registrar Aluno"></input>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default CadastroPessoa;



