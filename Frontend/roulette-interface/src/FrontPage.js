import React from 'react';
import logo from './logo.svg';
import './FrontPage.css';
import { Route, Link } from 'react-router-dom';

class FrontPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            handle: "",
            name: ""
        };

        this.newGame = this.newGame.bind(this);
        this.joinGame = this.joinGame.bind(this);
        this.codeInput = this.codeInput.bind(this);
        this.nameInput = this.nameInput.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }

    newGame(e) {
        this.props.changeView(1);
    }

    joinGame(e) {
        this.props.changeView(1);
    }

    nameInput(e) {
        this.setState({name: this.refs.name.value});
    }

    codeInput(e) {
        this.setState({code: this.refs.code.value});
    }

    handleInput(e) {
        this.setState({handle: this.refs.handle.value});
    }

    render() {
        return (
            <div>
                <p>
                    FrontPage.
                </p>

                <input type="text" onChange={this.codeInput} ref="code"></input>
                <input type="text" onChange={this.handleInput} ref="handle"></input>
                <input type="text" onChange={this.nameInput} ref="name"></input>

                <button onClick={() => this.props.changeLobby(this.state.code, this.state.handle, this.state.name)}>
                    Join Lobby
                </button>

            </div>
        );
    }
}

export default FrontPage;
