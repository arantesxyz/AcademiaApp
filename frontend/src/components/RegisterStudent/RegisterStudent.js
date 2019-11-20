import React, { Component } from "react";
import "./RegisterStudent.css";


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
                <h1 className="">Novo aluno</h1>
                <form>
                        <div className="">
                            <div className="">
                                <label for="name">Nome:</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={this.state.model.name}
                                    placeholder="Joao da Silva"
                                    onChange={(e) => this.setValue(e, "name")}
                                />
                            </div>
                            <div className="">
                                <label for="instagram">Instagram:</label>
                                <input
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

                        <div className="">
                            <div className="">
                                <label for="phone">Telefone:</label>
                                <input
                                    id="phone"
                                    type="text"
                                    value={this.state.model.phone}
                                    placeholder="(31) 99999-9999"
                                    onChange={(e) => this.setValue(e, "phone")}
                                />
                            </div>
                            <div className="">
                                <label for="email">Email:</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={this.state.model.email}
                                    placeholder="aluno@exemplo.com"
                                    onChange={(e) => this.setValue(e, "email")}
                                />
                            </div>
                            <div className="">
                                <label for="birthday">
                                    Data de Nascimento:
                                </label>
                                <input
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

                        <div className="">
                            <label for="address">Endereço:</label>
                            <input
                                id="address"
                                type="text"
                                value={this.state.model.address}
                                placeholder="Rua Claudio da Silva, 188, Savassi"
                                onChange={(e) => this.setValue(e, "address")}
                            />
                        </div>


                    {/* Buttons */}
                    <div className="">
                        <div className="">
                            <button color="primary" block onClick={this.create}>
                                {" "}
                                Gravar{" "}
                            </button>
                        </div>

                        <div className="">
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
                </form>
            </div>
        );
    }
}
