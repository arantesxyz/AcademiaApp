import "./App.css";

import React, { Component } from "react";

import { Dashboard } from "./components/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar/Sidebar";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar></Sidebar>
                <div className="app-content">
                    <Dashboard></Dashboard>
                </div>
            </div>
        );
    }
}

export default App;
