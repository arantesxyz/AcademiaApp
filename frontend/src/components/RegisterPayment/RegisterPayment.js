import React, { Component } from "react";
import "./RegisterPayment.css";
import { SendRequest } from "../../imports/sendrequest";

export class RegisterPayment extends Component {
    state = {
        model: {}
    };

    setValue = (e, field) => {
        const { model } = this.state;
        model[field] = e.target.value;
        this.setState({ model });
    };

    async _sendStatePayments() {
        if (this.validate()) {
            const { model } = this.state.model;
            let response = [];
            try {
                response = await SendRequest("/payments/", "POST", model);
            } catch (error) {
                console.log("Error: ", error);
            }
            console.log(response);
        }
        console.log("Error: algum campo vazio");
        window.postMessage("Pagamento criado");
    }
    validate() {
        const { validation } = this.state.model;
        if (!validation.name || !validation.paymentDate || !validation.value) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className="registerPayment">
                <h1 className="head">Registrar pagamento</h1>
                <p></p>
                <form>
                    <formgroup>
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
                    </formgroup>

                    <formgroup>
                        <div className="form-row">
                            <div className="col-md-9">
                                <label for="data">Data do pagamento:</label>
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
                    </formgroup>
                    <formgroup>
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
                        <div className="warpInput">
                            <input
                                type="submit"
                                value="Cadastrar"
                                onClick={(e) => this._sendStatePayments()}
                            ></input>
                        </div>
                    </formgroup>
                </form>
            </div>
        );
    }
}
