import "./Classes.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SendRequest } from "../../imports/sendrequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RegisterClass } from "../RegisterClass/RegisterClass";

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
            response = await SendRequest("/classes/", "GET");
        } catch (error) {
            console.log("Error: ", error);
        }
        this.setState({ classes: response });
    }

    render() {
        return (
            <div className="classes">
                <h1 className="head">Lista todas as turmas</h1>
                <table id="classesTable">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Modalidade</th>
                            <th>Alunos</th>
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
                                </tr>
                            ))}
                    </tbody>
                </table>
                {!this.state.classes.length && (
                    <p className="loading">Carregando...</p>
                )}
                <RegisterClass></RegisterClass>
            </div>
        );
    }
}
