import React, { Component } from "react";
import "./RegisterStudent.css";

import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

export class RegisterStudent extends Component {
    state = {
        model: {}
    };

    setValue = (e, field) => {
        const { model } = this.state;
        model[field] = e.target.value;
        this.setState({ model });
    };

    render() {
        return (
            <div className="registerStudent">
                <h1 className="text-center">Novo aluno</h1>
                <Form>
                    <FormGroup>
                        <div className="form-row">
                            <div className="col-md-9">
                                <Label for="name">Nome:</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={this.state.model.name}
                                    placeholder="Joao da Silva"
                                    onChange={(e) => this.setValue(e, "name")}
                                />
                            </div>
                            <div className="col-md-3">
                                <Label for="instagram">Instagram:</Label>
                                <Input
                                    id="instagram"
                                    type="text"
                                    value={this.state.model.instagram}
                                    placeholder="@JoaoSilva"
                                    onChange={(e) =>
                                        this.setValue(e, "instagram")
                                    }
                                />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <div className="form-row">
                            <div className="col-md-3">
                                <Label for="phone">Telefone:</Label>
                                <Input
                                    id="phone"
                                    type="text"
                                    value={this.state.model.phone}
                                    placeholder="(31) 99999-9999"
                                    onChange={(e) => this.setValue(e, "phone")}
                                />
                            </div>
                            <div className="col-md-5">
                                <Label for="email">Email:</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={this.state.model.email}
                                    placeholder="aluno@exemplo.com"
                                    onChange={(e) => this.setValue(e, "email")}
                                />
                            </div>
                            <div className="col-md-4">
                                <Label for="birthday">
                                    Data de Nascimento:
                                </Label>
                                <Input
                                    id="birthday"
                                    type="date"
                                    value={this.state.model.email}
                                    placeholder="01/01/2019"
                                    onChange={(e) =>
                                        this.setValue(e, "birthday")
                                    }
                                />
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-row">
                            <Label for="address">Endereço:</Label>
                            <Input
                                id="address"
                                type="text"
                                value={this.state.model.address}
                                placeholder="Rua Claudio da Silva, 188, Savassi"
                                onChange={(e) => this.setValue(e, "address")}
                            />
                        </div>
                    </FormGroup>

                    {/* Buttons */}
                    <div className="form-row">
                        <div className="col-md-6">
                            <Button color="primary" block onClick={this.create}>
                                {" "}
                                Gravar{" "}
                            </Button>
                        </div>

                        <div className="col-md-6">
                            <Button
                                color="secondary"
                                block
                                onClick={this.create}
                            >
                                {" "}
                                Limpar formulário{" "}
                            </Button>
                        </div>
                    </div>
                    {/* End Buttons */}
                </Form>
            </div>
        );
    }
}
