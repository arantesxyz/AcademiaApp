import React, { Component } from "react";

import "../Relatory/Relatory.css";

import { SendRequest } from "../../imports/sendrequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Relatory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Relatorys: []
        };

        this._setStateRelatorys();
    }

    async _setStateRelatorys() {
        let response = [];
        try {
            response = await SendRequest(
                "/payments?type=debit",
                "GET"
            );
        } catch (error) {
            console.log("Error: ", error);
        }
        let date = new Date().getDate(); 
        date.setHours(0,0,0,0);

        let tomorrowDate = new Date().getDate(); 
        tomorrowDate.setDate(date.getDate() + 1);
        tomorrowDate.setHours(0,0,0,0);

        response.filter((item) => item.date >= date && item.date <tomorrowDate);
        this.setState({ BillsToPay: response });
    }

    render() {
        return (
            <div className="relatory">
                <h1 className="head">Fechamento de contas diário</h1>
                    <table id="relatorys">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody className="scrool">
                            {this.state.Relatorys.length > 0 &&
                                this.state.Relatorys.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.value}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    {!this.state.Relatorys.length && (
                        <p className="loading">Carregando...</p>
                    )}
                </div>
        );
    }
}
