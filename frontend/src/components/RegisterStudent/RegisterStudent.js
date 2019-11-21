import React, { Component } from "react";
import "./RegisterStudent.css";
import {SendRequest} from '../../imports/sendrequest';


export class RegisterStudent extends Component {
    state = {
        model: {}
    };

    async _sendStateStudent() {
        if(this.validate()){
            const {model} = this.state.model
        let response = [];
        try {
            response = await SendRequest("/student/", "POST",model);
        } catch (error) {
            console.log("Error: ", error);
        }
        console.log(response);
        window.postMessage("Usario" + response._id +"criado") ;
    }
        console.log("Error: algum campo vazio");
    }
    validate(){
        const {validation} = this.state.model;
        if(!validation.name || !validation.instagram || !validation.phone || !validation.email || !validation.birthday || !validation.address){
            return false
        }
        return true;
    };

    setValue = (e, field) => {
        const { model } = this.state;
        model[field] = e.target.value;
        this.setState({ model });
    };

    render() {
        return (
            <div className="registerStudent">
                <h1 className="head">Novo aluno</h1>
                <p></p>

                <div>
                    <form>
                        <label for="name">Nome:</label>
                        <p>
                        <input
                                    id="name"
                                    type="text"
                                    value={this.state.model.name}
                                    placeholder="Joao da Silva"
                                    onChange={(e) => this.setValue(e, "name")}
                                />
                                </p>

                         <label for="instagram">Instagram:</label>
                         <p>
                         <input
                                    id="instagram"
                                    type="text"
                                    value={this.state.model.instagram}
                                    placeholder="@JoaoSilva"
                                    onChange={(e) =>
                                        this.setValue(e, "instagram")
                                    }
                                />
                                </p>
                                <label for="phone">Telefone:</label>
                                <p>
                                <input
                                    id="phone"
                                    type="text"
                                    value={this.state.model.phone}
                                    placeholder="(31) 99999-9999"
                                    onChange={(e) => this.setValue(e, "phone")}
                                />
                                </p>
                                <label for="email">Email:</label>
                                <p>
                                <input
                                    id="email"
                                    type="email"
                                    value={this.state.model.email}
                                    placeholder="aluno@exemplo.com"
                                    onChange={(e) => this.setValue(e, "email")}
                                />
                                </p>

                             <label for="birthday"> Data de Nascimento:</label>
                               <p> <input
                                    id="birthday"
                                    type="date"
                                    value={this.state.model.birthday}
                                    placeholder="01/01/2019"
                                    onChange={(e) =>
                                        this.setValue(e, "birthday")
                                    }
                                />
                                </p>
                                <label for="address">Endereço:</label>
                           <p> <input
                                id="address"
                                type="text"
                                value={this.state.model.address}
                                placeholder="Rua Claudio da Silva, 188, Savassi"
                                onChange={(e) => this.setValue(e, "address")}
                            />
                            </p>

                       <div className="warpInput">             
                    <input type="submit" value="Cadastrar" onClick={(e) => this._sendStateStudent()}></input>
                    </div>
                    </form>
        </div>
  
</div>

        )}
}
