import React, { Component } from "react";
import "./CadastroPessoa.css";

class CadastroPessoa extends Component {
    cadastrarAluno() {
        // Dados de exemplo
        let aluno = {
            nome: document.getElementById("inputName").value, // obrigatorio
            phone: document.getElementById("inputPhone").value, //obrigatorio
            email: document.getElementById("inputEmail").value, //obrigatorio
            address: document.getElementById("inputAddress").value,
            birthday: document.getElementById("inputBirthday").value,
            instagram: document.getElementById("inputInsta").value
        };
        console.log(aluno);

        fetch("http://localhost:3002/alunos", {
            method: "POST",
            body: JSON.stringify(aluno),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(console.log)
            .catch(console.log);
    }
    render() {
        return (
            <div className="container">
                <div className="cadastro">
                    <div className="dadosContainer">
                        <strong className="contentRegistro">
                            Cadastro de usuários
                        </strong>
                        <div className="inputs" id="nome">
                            <div className="nomeCampo">Nome: </div>
                            <input id="inputName"></input>
                        </div>
                        <div className="inputs" id="telefone">
                            <div className="nomeCampo"> Telefone: </div>
                            <input id="inputPhone"></input>
                        </div>
                        <div className="inputs" id="email">
                            <div className="nomeCampo"> E-mail: </div>{" "}
                            <input id="inputEmail"></input>
                        </div>
                        <div className="inputs" id="endereco">
                            <div className="nomeCampo"> Endereço: </div>{" "}
                            <input id="inputAddress"></input>
                        </div>
                        <div className="inputs" id="dataNascimento">
                            <div className="nomeCampo">
                                Data de nascimento:{" "}
                            </div>{" "}
                            <input id="inputBirthday"></input>
                        </div>
                        <div className="inputs" id="instagram">
                            <div className="nomeCampo">Instagram: </div>
                            <input id="inputInsta"></input>
                        </div>
                        <div className="inputs">
                            <input
                                type="submit"
                                value="Registrar Aluno"
                                onClick={this.cadastrarAluno}
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastroPessoa;
