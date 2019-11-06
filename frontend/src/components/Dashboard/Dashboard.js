import "./Dashboard.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { RegisterClass } from "../RegisterClass/RegisterClass";
import { RegisterStudent } from "../RegisterStudent/RegisterStudent";
import { Students } from "../Students/Students";
import { Student } from "../Student/Student";
import { Class } from "../Class/Class";
import { Classes } from "../Classes/Classes";
import { Payments } from "../Payments/Payments";
import { RegisterPayment } from "../RegisterPayment/RegisterPayment";

export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/turmas/criar"
                            component={RegisterClass}
                        />
                        <Route exact path="/turmas/" component={Classes} />
                        <Route exact path="/turma/:id" component={Class} />
                        <Route exact path="/alunos/" component={Students} />
                        <Route exact path="/aluno/:id" component={Student} />
                        <Route
                            exact
                            path="/alunos/adicionar"
                            component={RegisterStudent}
                        />
                        <Route exacts path="/payments/" component={Payments} />
                        <Route
                            exacts
                            path="/payments/adicionar"
                            component={RegisterPayment}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}
