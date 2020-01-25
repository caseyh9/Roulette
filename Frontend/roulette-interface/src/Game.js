import React from 'react';
import logo from './logo.svg';
import './Game.css';
import { Link } from 'react-router-dom';

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Game">
            <header className="Game-header">
            <img src={logo} className="Game-logo" alt="logo" />
            <Link to='/Scoreboard'>Scoreboard</Link>
            <Link to='/Final'>Final</Link>
            <p>
                Edit <code>src/Game.js</code> and save to reload.
            </p>
            <a
                className="Game-link"
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

export default Game;
