import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header className="App-header">
                    <img
                        src="http://www.academiagolfinhodourado.com.br/gofinho/wp-content/uploads/2013/11/logomarca-golfinho-dourado1.png"
                        className="App-logo"
                    />
                    <h1 className="App-title">Academia Golfinho Dourado</h1>
                </header>
            </div>
        );
    }
}

export default Header;
