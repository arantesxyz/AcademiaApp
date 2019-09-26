import React, { Component } from "react";
import "./CadastroPessoa.css";

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
                            <div className="nomeCampo">Nome: </div>
                            <input></input>
                        </div>
                        <div className="inputs" id="telefone">
                            <div className="nomeCampo"> Telefone: </div>
                            <input></input>
                        </div>
                        <div className="inputs" id="email">
                            <div className="nomeCampo"> E-mail: </div>{" "}
                            <input></input>
                        </div>
                        <div className="inputs" id="endereco">
                            <div className="nomeCampo"> Endereço: </div>{" "}
                            <input></input>
                        </div>
                        <div className="inputs" id="dataNascimento">
                            <div className="nomeCampo">
                                Data de nascimento:{" "}
                            </div>{" "}
                            <input></input>
                        </div>
                        <div className="inputs" id="instagram">
                            <div className="nomeCampo">Instagram: </div>
                            <input></input>
                        </div>
                        <div className="inputs">
                            <input
                                type="submit"
                                value="Registrar Aluno"
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function sendRequest(path, method, data) {
    return new Promise((res, err) => {
        let xhr = new XMLHttpRequest();

        let url = "http://eu.arantes.xyz:3001" + path; // Corrigir o caminho

        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

        xhr.onload = () => {
            if (xhr.status == 200) {
                res(JSON.parse(xhr.responseText));
            } else {
                err(xhr.statusText);
            }
        };

        console.log("Enviando os dados");
        xhr.send(JSON.stringify(data));
    });
}

function cadastrarAluno(nome, phone, email, address, birthday, instagram) {
    // Dados de exemplo
    let aluno = {
        nome, // obrigatorio
        phone, //obrigatorio
        email, //obrigatorio
        address,
        birthday,
        instagram
    };

    sendRequest("alunos", "POST", user).then((res) => {
        console.log(res);
        // TODO
    });
}

export default CadastroPessoa;
