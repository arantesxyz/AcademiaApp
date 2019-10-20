import "./Classes.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

import { SendRequest } from "../../imports/sendrequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Classes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: []
        };

        this._setStateClasses();
    }

    async _setStateClasses() {
        let response = [];
        try {
            response = await SendRequest("/turmas", "GET");
        } catch (error) {
            console.log("Error: ", error);
        }
        this.setState({ classes: response });
    }

    render() {
        return (
            <div className="classes">
                <h1 className="text-center">Lista todas as turmas</h1>
                <div className="center margin-top">
                    <Table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Modalidade</th>
                                <th>Alunos</th>
                                <th>Mais</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.classes.length > 0 &&
                                this.state.classes.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.modality}</td>
                                        <td>
                                            {(item.studens &&
                                                item.students.length) ||
                                                0}
                                            /{item.maxNumOfStudents}
                                        </td>
                                        <td>
                                            <Link to={`/turma/${item._id}`}>
                                                Ver mais
                                            </Link>
                                        </td>
                                        <td>
                                            <a href="#">
                                                <FontAwesomeIcon icon="edit" />{" "}
                                            </a>
                                            <a href="#">
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                    {!this.state.classes.length && (
                        <p className="text-center">Carregando...</p>
                    )}
                </div>
            </div>
        );
    }
}
