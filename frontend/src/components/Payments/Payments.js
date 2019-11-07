import "./Payments.css";

import React, { Component } from "react";
import { Table } from "reactstrap";

import { SendRequest } from "../../imports/sendrequest";

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
                <h1 className="text-center">Todos os pagamentos</h1>
                <div className="center margin-top">
                    <Table>
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
                                        <td>{item.name}</td>
                                        <td>{item.date}</td>
                                        <td>{item.value}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                    {!this.state.payments.length && (
                        <p className="text-center">Carregando...</p>
                    )}
                </div>
            </div>
        );
    }
}
