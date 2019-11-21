import "./Sidebar.css";

import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Sidebar extends Component {
    state = {
        open: this.props.open
    };

    toggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div>
                <div className={`sidebar ${this.state.open && "open"}`}>
                    <div className="menu">
                        <a onClick={this.toggle.bind(this)}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </a>
                    </div>

                    <div className={`content ${this.state.open && "open"}`}>
                        <figure className="logo">
                            <img
                                src={window.location.origin + "/logo.png"}
                            ></img>
                        </figure>

                        <div className={`nav ${this.state.open && "open"}`}>
                            <ul>
                                <a href="/home">
                                    <li>
                                        <FontAwesomeIcon icon="home" />
                                        <span> Início</span>
                                    </li>
                                </a>
                                <a href="/turmas">
                                    <li>
                                        <FontAwesomeIcon icon="university" />
                                        <span> Turmas</span>
                                    </li>
                                </a>
                                <a href="/alunos">
                                    <li>
                                        <FontAwesomeIcon icon="user-graduate" />
                                        <span> Alunos</span>
                                    </li>
                                </a>
                                <a href="/pagamentos">
                                    <li>
                                        <FontAwesomeIcon icon="file-invoice-dollar" />
                                        <span> Pagamentos</span>
                                    </li>
                                </a>
                                <a href="/contas">
                                    <li>
                                        <FontAwesomeIcon icon="file-invoice-dollar" />
                                        <span> Contas abertas</span>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
