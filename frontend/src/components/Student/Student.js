import "./Student.css";

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SendRequest } from "../../imports/sendrequest";
import { Link } from "react-router-dom";

export class Student extends Component {
    // this.props.match.params.id == student id
    state = {
        student: {}
    };

    constructor(props) {
        super(props);

        this.state = {
            student: {}
        };

        this._setStateStudent();
    }

    confirmDelete(deletar) {
        if (deletar) this._deleteStudent();
    }
    async _deleteStudent() {
        let response = {};
        try {
            let path = { "/students/": String + this.state.student._id };
            response = await SendRequest(path, "DELETE");
            this.setState({ student: response });
        } catch (error) {
            console.log("Error: ", error);
        }
        console.log(response);
        window.postMessage("Usario" + this.state._id + "excluido");
    }

    async _setStateStudent() {
        let response = {};
        try {
            let path = { "/students/": String + this.props.match.params.id };
            response = await SendRequest(path, "GET");
        } catch (error) {
            console.log("Error: ", error);
        }
        console.log(response);
        this.setState({ student: response });
    }

    render() {
        return (
            <div className="student">
                <h1 className="head">Listar único aluno</h1>
                <h4 className="id">
                    Você está vendo o aluno: {this.props.match.params._id}
                </h4>

                <table id="tableStudents">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Instagram</th>
                            <th>Endereço</th>
                            <th>Aniversário</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.student.length > 0 && (
                            <tr key={this.state.student._id}>
                                <td>{this.state.student.name}</td>
                                <td>{this.state.student.email}</td>
                                <td>{this.state.student.phone}</td>
                                <td>{this.state.student.instagram}</td>
                                <td>{this.state.student.address}</td>
                                <td>{this.state.student.birthday}</td>
                                <td>
                                    <a href="#" title="Editar">
                                        <Link
                                            to={`/alunos/editar/${this.state.student._id}`}
                                        >
                                            <FontAwesomeIcon icon="edit" />{" "}
                                        </Link>
                                    </a>
                                    <a
                                        href="#"
                                        title="Deletar"
                                        onClick={(e) =>
                                            this.confirmDelete(
                                                window.confirm({
                                                    "Deletar aluno:":
                                                        String +
                                                        this.state.student._id
                                                })
                                            )
                                        }
                                    >
                                        <FontAwesomeIcon icon="trash-alt" />
                                    </a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {!this.state.student.length && (
                    <p className="loading">Carregando...</p>
                )}
            </div>
        );
    }
}
