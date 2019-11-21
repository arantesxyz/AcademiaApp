import React, { Component } from "react";
import "../Home/Home.css";

import { Card } from "../../components/Home/Card/Card";

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
            <h1 className="head">Início</h1>
            <div className="cards">
                <div>
            <Card subject="Alunos" description="Manipulação de alunos" path="/alunos"></Card>
            <Card subject="Turmas" description="Manipulação de turmas" path="/turmas"></Card>
            </div>
            <div>
            <Card subject="Pagamentos" description="Manipulação de pagamentos" path="/pagamentos"></Card>
            <Card subject="Contas a pagar" description="Manipulação de contas a pagar" path="/contas"></Card>
            </div>
            </div>
            </div>
        )
    }
}