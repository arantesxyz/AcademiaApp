import React, { Component } from "react";
import "./CadastroPessoa.css";

class CadastroPessoa extends Component {
    sendRequest(path, method, data) {
        return new Promise((res, err) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, "http://eu.arantes.xyz:3001/" + path, true);
            xhr.setRequestHeader(
                "Content-type",
                "application/json; charset=UTF-8"
            );

            xhr.onload = () => {
                if (xhr.status === 200) {
                    res(JSON.parse(xhr.responseText));
                } else {
                    err(xhr.statusText);
                }
            };
            console.log("Enviando dados");
            xhr.send(JSON.stringify(data));
        });
    }

    cadastrarAluno() {
        // Dados de exemplo
        const aluno = {
            name: document.getElementById("inputName").value, // obrigatorio
            phone: document.getElementById("inputPhone").value, //obrigatorio
            email: document.getElementById("inputEmail").value, //obrigatorio
            address: document.getElementById("inputAddress").value,
            birthday: document.getElementById("inputBirthday").value,
            instagram: document.getElementById("inputInsta").value
        };

        this.sendRequest("alunos", "POST", aluno).then((res) => {
            console.log(res);
            // TODO
        });
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
                                onClick={this.cadastrarAluno.bind(this)}
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastroPessoa;
