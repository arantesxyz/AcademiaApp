import "../Card/Card.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div class="card" href={this.props.path}>
            <div class="container">
        <h1 id="subject"><b>{this.props.subject}</b></h1>
        <hr></hr>
        <a >
        <div id="descriptionCard">{this.props.description}</div> 
        </a>
        
        </div>
        
      </div>);
}
}