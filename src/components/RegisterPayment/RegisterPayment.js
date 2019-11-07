import React, { Component } from "react";
import "./RegisterPayment.css";

import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

export class RegisterPayment extends Component {
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
            <div className="registerPayment">
                <h1 className="text-center">Registrar pagamento</h1>
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
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <div className="form-row">
                            <div className="col-md-9">
                                <Label for="data">
                                    Data do pagamento:
                                </Label>
                                <Input
                                    id="paymentDate"
                                    type="date"
                                    value={this.state.model.paymentDate}
                                    placeholder="01/01/2019"
                                    onChange={(e) =>
                                        this.setValue(e, "paymentDate")
                                    }
                                />
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-row">
                            <Label for="value">Valor:</Label>
                            <Input
                                id="value"
                                type="text"
                                value={this.state.model.value}
                                placeholder="0 R$"
                                onChange={(e) => this.setValue(e, "value")}
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
