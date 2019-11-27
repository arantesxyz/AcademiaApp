import React, { Component } from "react";
import { SendRequest } from "../../imports/sendrequest";

export class RegisterBillToPay extends Component {
    state = {
        model: {}
    };

    async _sendStateBills() {
        if (this.validate()) {
            const { model } = this.state.model;
            let response = [];
            try {
                response = await SendRequest("/B", "POST", model); //todo route
            } catch (error) {
                console.log("Error: ", error);
            }
            console.log(response);
        }

        console.log("Error: Campos vazios nos input");
    }

    setValue = (e, field) => {
        const { model } = this.state;
        model[field] = e.target.value;
        this.setState({ model });
    };

    validate() {
        const { validation } = this.state.model;
        if (
            !validation.descricao ||
            !validation.paymentDate ||
            !validation.value
        ) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className="registerBillToPay">
                <h1 className="head">Registrar conta a pagar</h1>
                <p></p>
                <form>
                    <formgroup>
                        <div className="form-row">
                            <div className="col-md-9">
                                <label for="name">Descrição: </label>
                                <p>
                                    <input
                                        id="name"
                                        type="text"
                                        value={this.state.model.descricao}
                                        placeholder="Conta de luz do mes de novembro"
                                        onChange={(e) =>
                                            this.setValue(e, "descricao")
                                        }
                                    />
                                </p>
                            </div>
                        </div>
                    </formgroup>

                    <formgroup>
                        <div className="form-row">
                            <div className="col-md-9">
                                <label for="data">Data da conta:</label>
                                <p>
                                    <input
                                        id="paymentDate"
                                        type="date"
                                        value={this.state.model.paymentDate}
                                        placeholder="01/11/2019"
                                        onChange={(e) =>
                                            this.setValue(e, "paymentDate")
                                        }
                                    />
                                </p>
                            </div>
                        </div>
                    </formgroup>
                    <formgroup>
                        <div className="form-row">
                            <label for="value">Valor:</label>
                            <p>
                                <input
                                    id="value"
                                    type="text"
                                    value={this.state.model.value}
                                    placeholder="0 R$"
                                    onChange={(e) => this.setValue(e, "value")}
                                />
                            </p>
                        </div>
                        <div className="warpInput">
                            <input
                                type="submit"
                                value="Cadastrar"
                                onClick={(e) => this._sendStateBills()}
                            ></input>
                        </div>
                    </formgroup>
                </form>
            </div>
        );
    }
}
