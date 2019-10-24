import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Dashboard } from "./components/Dashboard/Dashboard";
import { RegisterClass } from "./components/RegisterClass/RegisterClass";
import { RegisterStudent } from "./components/RegisterStudent/RegisterStudent";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Students } from "./components/Students/Students";
import { Student } from "./components/Student/Student";
import { Class } from "./components/Class/Class";
import { Classes } from "./components/Classes/Classes";
import { Payments} from "./components/Payments/Payments";
import { RegisterPayment} from "./components/RegisterPayment/RegisterPayment";

class App extends Component {
    render() {
        return (
            <div className="App row nopadding">
                <div className="col-md-2 nopadding">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 nopadding">
                    <Router>
                        <div className="content">
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route
                                    exact
                                    path="/turmas/criar"
                                    component={RegisterClass}
                                />
                                <Route
                                    exact
                                    path="/turmas/"
                                    component={Classes}
                                />
                                <Route
                                    exact
                                    path="/turma/:id"
                                    component={Class}
                                />
                                <Route
                                    exact
                                    path="/alunos/"
                                    component={Students}
                                />
                                <Route
                                    exact
                                    path="/aluno/:id"
                                    component={Student}
                                />
                                <Route
                                    exact
                                    path="/alunos/adicionar"
                                    component={RegisterStudent}
                                />
                                <Route
                                    exacts
                                    path="/payments/"
                                    component={Payments}
                                />
                                <Route
                                    exacts
                                    path="/payments/adicionar"
                                    component={RegisterPayment}
                                />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
