import "./App.css";
import React, { Component } from "react";
import { RegisterStudent } from "./components/RegisterStudent/RegisterStudent";
import { RegisterClass } from "./components/RegisterClass/RegisterClass";

class App extends Component {
    componentDidMount() {
        document.title = "Academia App";
    }

    render() {
        return (
            <div className="App">
                <RegisterStudent></RegisterStudent>
                <RegisterClass></RegisterClass>
            </div>
        );
    }
}

export default App;
