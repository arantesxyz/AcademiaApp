import React, { Component } from "react";
import "./RegisterClass.css";
import { SendRequest } from "../../imports/sendrequest";

export class RegisterClass extends Component {
    state = {
        model: {
            times: [
                {
                    id:
                        Math.random()
                            .toString(36)
                            .substring(2, 4) +
                        Math.random()
                            .toString(36)
                            .substring(2, 4),
                    weekDay: "",
                    hour: ""
                }
            ],
            maxNumOfStudents: 10
        }
    };

    setValue = (e, field) => {
        const { model } = this.state;
        model[field] = e.target.value;
        this.setState({ model });
    };

    setTimeState = (time) => {
        const { model } = this.state;

        const timeIndex = model.times.findIndex((e) => e.id == time.id);

        if (timeIndex != -1) model.times[timeIndex] = time;
        else model.times.push(time);

        this.setState({ model });
    };

    removeTime = (id) => {
        const { model } = this.state;

        model.times = model.times.filter((e) => e.id != id);

        this.setState({ model });
    };

    addTime = () => {
        const { model } = this.state;

        model.times.push({
            id:
                Math.random()
                    .toString(36)
                    .substring(2, 4) +
                Math.random()
                    .toString(36)
                    .substring(2, 4),
            weekDay: "",
            hour: ""
        });

        this.setState({ model });
    };

    async _sendStateClass() {
        if (this.validate()) {
            const { model } = this.state.model;
            let response = [];
            try {
                response = await SendRequest("/classes/", "POST", model);
            } catch (error) {
                console.log("Error: ", error);
            }
            console.log(response);
            window.postMessage("Classe criada");
        }
        console.log("Error: algum campo vazio");
    }
    validate() {
        const { validation } = this.state.model;
        if (
            !validation.name ||
            !validation.modality ||
            !validation.maxNumOfStudents ||
            !validation.description ||
            !validation.times
        ) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className="registerClass">
                <h1 className="head">Nova turma</h1>
                <p></p>
                <div>
                    <form>
                        <label for="name">Nome:</label>
                        <p>
                            <input
                                id="name"
                                type="text"
                                value={this.state.model.name}
                                placeholder="Turma 1, Natação 19h, ..."
                                onChange={(e) => this.setValue(e, "name")}
                            />
                        </p>
                        <label for="modality">Modalidade:</label>
                        <p>
                            <select
                                id="select"
                                value={this.state.model.modality}
                                onChange={(e) => this.setValue(e, "modality")}
                                name="modalidade"
                            >
                                <option value="hidroginastica">
                                    Hidroginástica
                                </option>
                                <option value="natacao">Natacao</option>
                            </select>
                        </p>
                        <label for="maxNumOfStudents">Max de alunos:</label>
                        <p>
                            <input
                                id="maxNumOfStudents"
                                type="number"
                                value={this.state.model.maxNumOfStudents}
                                onChange={(e) =>
                                    this.setValue(e, "maxNumOfStudents")
                                }
                            />
                        </p>

                        <label for="description">Descrição:</label>
                        <p>
                            <input
                                id="description"
                                type="text"
                                value={this.state.model.description}
                                placeholder="Turma de natação as 19h"
                                onChange={(e) =>
                                    this.setValue(e, "description")
                                }
                            />
                        </p>

                        {/* Times div */}
                        <label>Horários: </label>
                        <input
                            id="btn-plus"
                            type="button"
                            value="Adicionar horário"
                            onClick={this.addTime}
                        />
                        {this.state.model.times.map((item) => (
                            <Times
                                key={item.id}
                                data={item}
                                setTimeState={this.setTimeState}
                                removeTime={this.removeTime}
                            ></Times>
                        ))}
                        <div className="warpInput">
                            <input
                                type="submit"
                                value="Cadastrar"
                                onClick={(e) => this._sendStateClass()}
                            ></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

class Times extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.data.id,
            weekDay: this.props.data.weekDay,
            hour: this.props.data.hour
        };
    }

    setValue = async (e, field) => {
        await this.setState({ [field]: e.target.value });
        this.props.setTimeState(this.state);
    };

    selfDestruction = () => {
        this.props.removeTime(this.props.data.id);
    };

    render() {
        return (
            <div className="Time">
                <label for="weekDay">Dia:</label>
                <p>
                    <select
                        id="weekDay"
                        value={this.state.weekDay}
                        onChange={(e) => this.setValue(e, "weekDay")}
                        name="horarios"
                    >
                        <option value="Domingo">Domingo</option>
                        <option value="Segunda">Segunda-feira</option>
                        <option value="Terca">Terça-feira</option>
                        <option value="Quarta">Quarta-feira</option>
                        <option value="Quinta">Quinta-feira</option>
                        <option value="Sexta">Sexta-feira</option>
                        <option value="Sabado">Sabado</option>
                    </select>
                </p>
                <div className="">
                    <label for="hour">Hora:</label>
                    <p>
                        <input
                            id="hour"
                            type="text"
                            value={this.state.hour}
                            placeholder="19:00"
                            onChange={(e) => this.setValue(e, "hour")}
                        />
                    </p>
                </div>
                <div className="">
                    <label for="hour">Excluir: </label>
                    <input
                        className="btn-danger"
                        type="button"
                        value="-"
                        onClick={this.selfDestruction}
                    />
                </div>
            </div>
        );
    }
}
