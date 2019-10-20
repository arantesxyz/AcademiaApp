import "./Class.css";

import React, { Component } from "react";

export class Class extends Component {
    // this.props.match.params.id == class id
    render() {
        return (
            <div className="class">
                <h1 className="text-center">Lista única turma</h1>
                <p className="text-center">
                    Você está vendo a turma: {this.props.match.params.id}
                </p>
            </div>
        );
    }
}
