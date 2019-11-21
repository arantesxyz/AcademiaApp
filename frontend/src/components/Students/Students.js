import "./Students.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SendRequest } from "../../imports/sendrequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RegisterStudent} from "../RegisterStudent/RegisterStudent";
export class Students extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: []
        };

        this._getStateStudents();
    }
    confirmDelete(deletar,id)
    {if(deletar)
        this._deleteStudent(id);
    }
    async _deleteStudent(id) {

            let response = {};
        try {
            let path = {"/student/" : String + id}
            response = await SendRequest(path, "DELETE");
            this.setState({students: this.state.students.filter(students => students !== id)});
        } catch (error) {
            console.log("Error: ", error);
        }
        console.log(response);
        window.postMessage("Usario" + id +"excluido") ;
    }

    async _getStateStudents() {
        let response = [];
        try {
            response = await SendRequest("/student/", "GET");
        } catch (error) {
            console.log("Error: ", error);
        }
        console.log(response);
        this.setState({ students: response });
    }
    render() {
        return (
            <div className="students">
                <h1 className="head">Todos os alunos</h1>
                    <table id="tableStudents">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Instagram</th>
                                <th>Mais</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody  className='scrool'>
                            {this.state.students.length > 0 &&
                                this.state.students.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.instagram}</td>
                                        <td>
                                            <Link to={`/aluno/${item._id}`}>
                                                Ver mais
                                            </Link>
                                        </td>

                                        <td>
                                            <a href="#" title="Editar">
                                            <Link to={`/alunos/editar/${item._id}`}>   
                                                <FontAwesomeIcon icon="edit" />{" "}
                                                </Link>
                                            </a>
                                            <a href="#" title="Deletar" onClick={(e) => this.confirmDelete(window.confirm({"Deletar aluno:":String + item._id}),item._id)}>
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </a>
                                        </td>
                                    </tr>
                                ))} 
                                    {/* <tr key= "1">
                                        <td>"nomeTest"</td>
                                        <td>"email"</td>
                                        <td>"phone"</td>
                                        <td>"instagram"</td>
                                        <td>
                                            <Link to={`/aluno/1`}>
                                                Ver mais
                                            </Link>
                                        </td>

                                        <td>
                                            <a href="#" title="Editar">
                                                <FontAwesomeIcon icon="edit" />{" "}
                                            </a>
                                            <a href="#"title="Deletar">
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr key= "2">
                                        <td>"nomeTest"</td>
                                        <td>"email"</td>
                                        <td>"phone"</td>
                                        <td>"instagram"</td>
                                        <td>
                                            <Link to={`/aluno/2`}>
                                                Ver mais
                                            </Link>
                                        </td>

                                        <td>
                                            <a href="#">
                                                <FontAwesomeIcon icon="edit" />{" "}
                                            </a>
                                            <a href="#">
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr key= "3">
                                        <td>"nomeTest"</td>
                                        <td>"email"</td>
                                        <td>"phone"</td>
                                        <td>"instagram"</td>
                                        <td>
                                            <Link to={`/aluno/3`}>
                                                Ver mais
                                            </Link>
                                        </td>

                                        <td>
                                            <a href="#">
                                                <FontAwesomeIcon icon="edit" />{" "}
                                            </a>
                                            <a href="#">
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr key= "1">
                                        <td>"nomeTest"</td>
                                        <td>"email"</td>
                                        <td>"phone"</td>
                                        <td>"instagram"</td>
                                        <td>
                                            <Link to={`/aluno/1`}>
                                                Ver mais
                                            </Link>
                                        </td>

                                        <td>
                                            <a href="#" title="Editar">
                                                <FontAwesomeIcon icon="edit" />{" "}
                                            </a>
                                            <a href="#"title="Deletar">
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </a>
                                        </td>
                                    </tr><tr key= "1">
                                        <td>"nomeTest"</td>
                                        <td>"email"</td>
                                        <td>"phone"</td>
                                        <td>"instagram"</td>
                                        <td>
                                            <Link to={`/aluno/1`}>
                                                Ver mais
                                            </Link>
                                        </td>

                                        <td>
                                            <a href="#" title="Editar">
                                                <FontAwesomeIcon icon="edit" />{" "}
                                            </a>
                                            <a href="#"title="Deletar">
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </a>
                                        </td>
                                    </tr><tr key= "1">
                                        <td>"nomeTest"</td>
                                        <td>"email"</td>
                                        <td>"phone"</td>
                                        <td>"instagram"</td>
                                        <td>
                                            <Link to={`/aluno/1`}>
                                                Ver mais
                                            </Link>
                                        </td>

                                        <td>
                                            <a href="#" title="Editar">
                                                <FontAwesomeIcon icon="edit" />{" "}
                                            </a>
                                            <a href="#"title="Deletar">
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </a>
                                        </td>
                                    </tr><tr key= "1">
                                        <td>"nomeTest"</td>
                                        <td>"email"</td>
                                        <td>"phone"</td>
                                        <td>"instagram"</td>
                                        <td>
                                            <Link to={`/aluno/1`}>
                                                Ver mais
                                            </Link>
                                        </td>

                                        <td>
                                            <a href="#" title="Editar">
                                                <FontAwesomeIcon icon="edit" />{" "}
                                            </a>
                                            <a href="#"title="Deletar" >
                                                <FontAwesomeIcon icon="trash-alt" />
                                            </a>
                                        </td>
                                    </tr> */}
                        </tbody>
                    </table>
                     {!this.state.students.length && (
                        <p className="loading">Carregando...</p>
                    )} 
                    <RegisterStudent></RegisterStudent>
                </div>
        );
    }
}
