import React from 'react';
import logo from './logo.svg';
import './Scoreboard.css';

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Scoreboard">
            <header className="Scoreboard-header">
            <img src={logo} className="Scoreboard-logo" alt="logo" />
            <p>
                Edit <code>src/Scoreboard.js</code> and save to reload.
            </p>
            <a
                className="Scoreboard-link"
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

export default Scoreboard;
