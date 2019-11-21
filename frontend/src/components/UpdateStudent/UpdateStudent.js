import React, { Component } from "react";
import "./UpdateStudent.css";
import {SendRequest} from '../../imports/sendrequest';


export class UpdateStudent extends Component {
    state = {
        model: {}
    };
    constructor(props) {
        super(props);

        this.state = {
            student: {
            }
        };

        this._getStateStudents();
    }
    async _getStateStudents() {
        let response = [];
        try {
            let path ="/student/"+ this.props.match.params.id;
            response = await SendRequest(path, "GET");
        } catch (error) {
            console.log("Error: ", error);
        }
        console.log(response);
        this.setState({ model: response });
    }

    async _updateStudent() {
        if(this.validate()){
        let response = {};
    try {
        let path = {"/students/" : String + this.state.model._id}
        let model = this.state.model;
        response = await SendRequest(path, "PUT",model);
    } catch (error) {
        console.log("Error: ", error);
    }
    console.log(response);
}
window.postMessage("Existem campos vazios") ;
}
    validate(){
        const {validation} = this.state.student;
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
                <h1 className="head">Atualizar aluno {this.props.match.params.id}</h1>
                <p></p>

                <div>
                    <form>
                        <label for="name">Nome:</label>
                        <p>
                        <input
                                    id="name"
                                    type="text"
                                    value=""
                                    placeholder="Joao da Silva"
                                    onChange={(e) => this.setValue(e, "name")}
                                />
                                </p>

                         <label for="instagram">Instagram:</label>
                         <p>
                         <input
                                    id="instagram"
                                    type="text"
                                    value=""
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
                                    value=""
                                    placeholder="(31) 99999-9999"
                                    onChange={(e) => this.setValue(e, "phone")}
                                />
                                </p>
                                <label for="email">Email:</label>
                                <p>
                                <input
                                    id="email"
                                    type="email"
                                    value=""
                                    placeholder="aluno@exemplo.com"
                                    onChange={(e) => this.setValue(e, "email")}
                                />
                                </p>

                             <label for="birthday"> Data de Nascimento:</label>
                               <p> <input
                                    id="birthday"
                                    type="date"
                                    value=""
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
                                value=""
                                placeholder="Rua Claudio da Silva, 188, Savassi"
                                onChange={(e) => this.setValue(e, "address")}
                            />
                            </p>

                       <div className="warpInput">             
                    <input type="submit" value="Fazer update" onClick={(e) => this._updateStudent()}></input>
                    </div>
                    </form>
        </div>
  
</div>

        )}
}
