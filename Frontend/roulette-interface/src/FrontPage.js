import React from 'react';
import logo from './logo.svg';
import './FrontPage.css';
import App from './App';
import { Route, Link } from 'react-router-dom';

class FrontPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Game: "",
            code: "",
            handle: "",
            name: ""
        };

        this.newGame = this.newGame.bind(this);
        this.joinGame = this.joinGame.bind(this);
    }

    newGame(e) {
        this.props.changeView(1);
    }

    joinGame(e) {
        this.props.changeView(1);
    }

    nameInput(e) {
        e.preventDefault();
        this.setState({name: this.refs.name.value});
    }

    codeInput(e) {
        e.preventDefault();
        this.setState({name: this.refs.code.value});
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <p>
                    FrontPage.
                </p>

                <input type="text" onChange={this.codeInput} ref="code"></input>
                <input type="text" onChange={this.codeInput} ref="handle"></input>
                <input type="text" onChange={this.nameInput} ref="name"></input>

                <button onClick={(e) => console.log(e)}>
                    Create Game
                </button>
                <button onClick={(e) => console.log(e)}>
                    Join Game
                </button>


            </div>
        );
    }
}

export default FrontPage;
