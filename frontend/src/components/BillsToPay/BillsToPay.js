import React, { Component } from "react";


import { SendRequest } from "../../imports/sendrequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class BillsToPay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            BillsToPay: []
        };

        this._setStateBillsToPay();
    }

    async _setStateBillsToPay() {
        let response = [];
        try {
            response = await SendRequest(
                "/payments?type=company&debit=true",
                "GET"
            );
        } catch (error) {
            console.log("Error: ", error);
        }
        this.setState({ BillsToPay: response });
    }

    render() {
        return (
            <div className="classes">
                <h1 className="text-center">Contas a pagar</h1>
                <div className="center margin-top">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                                <th>Mais</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.BillsToPay.length > 0 &&
                                this.state.BillsToPay.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.value}</td>
                                        <td>
                                            <a href="#">
                                                <FontAwesomeIcon icon="edit" />{" "}
                                            </a>
                                            <a href="#">
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    {!this.state.BillsToPay.length && (
                        <p className="text-center">Carregando...</p>
                    )}
                </div>
            </div>
        );
    }
}
