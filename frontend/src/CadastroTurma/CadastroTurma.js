import React, { Component } from "react";
import "./CadastroTurma.css";

class CadastroTurma extends Component {
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

    cadastrarTurma() {
        const turma = {
            name: document.getElementById("nameIn").value, // obrigatorio
            description: document.getElementById("inputDescription").value, //obrigatorio
            modality: document.getElementById("inputModality").value, //obrigatorio
            times: [{ time: document.getElementById("inputTimes").value }],
            maxNumOfStudents: document.getElementById("inputMaxNum").value
        };

        this.sendRequest("turmas", "POST", turma).then((res) => {
            console.log(res);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="cadastro">
                    <div className="dadosContainer">
                        <strong className="contentRegistro">
                            Cadastro de turmas
                        </strong>
                        <div className="inputs">
                            <div className="nomeCampo">Modalidade: </div>
                            <input id="inputModality"></input>
                        </div>
                        <div className="inputs">
                            <div className="nomeCampo">Nome: </div>
                            <input id="nameIn"></input>
                        </div>
                        <div className="inputs">
                            <div className="nomeCampo">Descrição: </div>
                            <input id="inputDescription"></input>
                        </div>
                        <div className="inputs">
                            <div className="nomeCampo">Hora do dia: </div>{" "}
                            <input id="inputTimes"></input>
                        </div>
                        <div className="inputs">
                            <div className="nomeCampo">
                                Número Max de alunos:{" "}
                            </div>{" "}
                            <input id="inputMaxNum"></input>
                        </div>

                        <div className="inputs">
                            <input
                                type="submit"
                                value="Registrar Turma"
                                onClick={this.cadastrarTurma.bind(this)}
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastroTurma;
