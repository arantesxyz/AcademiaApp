import React, { Component } from "react";
import "./RegisterClass.css";

import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

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

    render() {
        return (
            <div className="registerClass">
                <h1 className="text-center">Nova turma</h1>
                <Form>
                    <FormGroup>
                        <div className="form-row">
                            <div className="col-md-7">
                                <Label for="name">Nome:</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={this.state.model.name}
                                    placeholder="Turma 1, Natação 19h, ..."
                                    onChange={(e) => this.setValue(e, "name")}
                                />
                            </div>
                            <div className="col-md-3">
                                <Label for="modality">Modalidade:</Label>
                                <Input
                                    id="modality"
                                    type="select"
                                    value={this.state.model.modality}
                                    onChange={(e) =>
                                        this.setValue(e, "modality")
                                    }
                                >
                                    <option>Natação</option>
                                    <option>Hidroginástica</option>
                                </Input>
                            </div>
                            <div className="col-md-2">
                                <Label for="maxNumOfStudents">
                                    Max de alunos:
                                </Label>
                                <Input
                                    id="maxNumOfStudents"
                                    type="number"
                                    value={this.state.model.maxNumOfStudents}
                                    onChange={(e) =>
                                        this.setValue(e, "maxNumOfStudents")
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-12">
                                <Label for="description">Descrição:</Label>
                                <Input
                                    id="description"
                                    type="text"
                                    value={this.state.model.description}
                                    placeholder="Turma de natação as 19h"
                                    onChange={(e) =>
                                        this.setValue(e, "description")
                                    }
                                />
                            </div>
                        </div>
                    </FormGroup>

                    {/* Times div */}
                    <div className="times-div">
                        <h4 className="text-center">Horários:</h4>
                        <Input
                            id="btn-plus"
                            type="button"
                            value="Adicionar horário"
                            onClick={this.addTime}
                        />
                        <FormGroup id="timeForm" className="time-box">
                            {this.state.model.times.map((item) => (
                                <Times
                                    key={item.id}
                                    data={item}
                                    setTimeState={this.setTimeState}
                                    removeTime={this.removeTime}
                                ></Times>
                            ))}
                        </FormGroup>
                    </div>
                    {/* End times div */}

                    {/* Buttons */}
                    <div className="form-row">
                        <div className="col-md-6">
                            <Button color="primary" block onClick={this.create}>
                                {" "}
                                Criar turma{" "}
                            </Button>
                        </div>

                        <div className="col-md-6">
                            <Button
                                color="secondary"
                                block
                                onClick={this.cleanForm}
                            >
                                {" "}
                                Limpar formulário{" "}
                            </Button>
                        </div>
                    </div>
                    {/* End Buttons */}
                </Form>
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
            <div className="App">
                <div className="form-row">
                    <div className="col-md-6">
                        <Label for="weekDay">Dia:</Label>
                        <Input
                            id="weekDay"
                            type="select"
                            value={this.state.weekDay}
                            onChange={(e) => this.setValue(e, "weekDay")}
                        >
                            <option>Domingo</option>
                            <option>Segunda-feira</option>
                            <option>Terça-feira</option>
                            <option>Quarta-feira</option>
                            <option>Quinta-feira</option>
                            <option>Sexta-feira</option>
                            <option>Sabado</option>
                        </Input>
                    </div>
                    <div className="col-md-5">
                        <Label for="hour">Hora:</Label>
                        <Input
                            id="hour"
                            type="text"
                            value={this.state.hour}
                            placeholder="19:00"
                            onChange={(e) => this.setValue(e, "hour")}
                        />
                    </div>
                    <div className="col-md-1">
                        <Label for="hour">Excluir:</Label>
                        <Input
                            className="btn-danger"
                            type="button"
                            value="-"
                            onClick={this.selfDestruction}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
