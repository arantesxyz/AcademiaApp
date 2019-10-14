import "./Student.css";

import React, { Component } from "react";

export class Student extends Component {
    // this.props.match.params.id == student id
    render() {
        return (
            <div className="student">
                <h1 className="text-center">Listar único aluno</h1>
            </div>
        );
    }
}
