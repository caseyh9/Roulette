import React from 'react';
import logo from './logo.svg';
import './Lobby.css';

class Lobby extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Lobby">
            <header className="Lobby-header">
            <img src={logo} className="Lobby-logo" alt="logo" />
            <p>
                Edit <code>src/Lobby.js</code> and save to reload.
            </p>
            <a
                className="Lobby-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            Learn React
            </a>
            </header>
            </div>
        );
    }
}

export default Lobby;
