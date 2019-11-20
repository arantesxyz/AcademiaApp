import React, { Component } from "react";
import "./RegisterPayment.css";


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
                        <div className="form-row">
                            <div className="col-md-9">
                                <label for="name">Nome:</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={this.state.model.name}
                                    placeholder="Joao da Silva"
                                    onChange={(e) => this.setValue(e, "name")}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-9">
                                <label for="data">
                                    Data do pagamento:
                                </label>
                                <input
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

                        <div className="form-row">
                            <label for="value">Valor:</label>
                            <input
                                id="value"
                                type="text"
                                value={this.state.model.value}
                                placeholder="0 R$"
                                onChange={(e) => this.setValue(e, "value")}
                            />
                        </div>

                    {/* Buttons */}
                    <div className="form-row">
                        <div className="col-md-6">
                            <button color="primary" block onClick={this.create}>
                                {" "}
                                Gravar{" "}
                            </button>
                        </div>

                        <div className="col-md-6">
                            <button
                                color="secondary"
                                block
                                onClick={this.create}
                            >
                                {" "}
                                Limpar formulário{" "}
                            </button>
                        </div>
                    </div>
                    {/* End Buttons */}
            </div>
        );
    }
}
