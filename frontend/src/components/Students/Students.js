import "./Students.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SendRequest } from "../../imports/sendrequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RegisterStudent} from "../RegisterStudent/RegisterStudent";
export class Students extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: []
            
        };

        this._setStateStudents();
    }

    async _setStateStudents() {
        let response = [];
        try {
            response = await SendRequest("/students", "GET");
        } catch (error) {
            console.log("Error: ", error);
        }
        console.log(response);
        
        this.setState({ students: response });
    }
    render() {
        return (
            <div className="students">
                <h1 className="text-center">Todos os alunos</h1>
                <div className="center margin-top">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Instagram</th>
                                <th>Mais</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.students.length > 0 &&
                                this.state.students.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.instagram}</td>
                                        <td>
                                            <link to={`/aluno/${item._id}`}>
                                                Ver mais
                                            </link>
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
                    </table>
                    {!this.state.students.length && (
                        <p className="text-center">Carregando...</p>
                    )}
                </div>
            </div>
        );
    }
}
