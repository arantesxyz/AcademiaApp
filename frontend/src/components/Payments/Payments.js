import "./Payments.css";

import React, { Component } from "react";

import { SendRequest } from "../../imports/sendrequest";
import { RegisterPayment } from "../RegisterPayment/RegisterPayment";

export class Payments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            payments: []
        };

        this._setStatePayments();
    }

    async _setStatePayments() {
        let response = [];
        try {
            response = await SendRequest("/payments", "GET");
        } catch (error) {
            console.log("Error: ", error);
        }
        console.log(response);
        this.setState({ payments: response });
    }
    render() {
        return (
            <div className="payments">
                <h1 className="head">Todos os pagamentos</h1>
                <table id="payments">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Data pagamento</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.payments.length > 0 &&
                            this.state.payments.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.studentId}</td>
                                    <td>{item.date}</td>
                                    <td>{item.value}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {!this.state.payments.length && (
                    <p className="loading">Carregando...</p>
                )}
                <RegisterPayment></RegisterPayment>
            </div>
        );
    }
}
