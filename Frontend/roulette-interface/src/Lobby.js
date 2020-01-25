import React from 'react';
import logo from './logo.svg';
import './Lobby.css';
import { Link } from 'react-router-dom';

class Lobby extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lobbyId: "",
            players: [],
        }
    }

    loadGame(player, roomId) {
        // load roomId from backend
        this.setState({
            lobbyId: roomId,
            players: [] /* FIXME: load players from backend */
        })
    }

    render() {
        createGame(this.props.id);
        return (
            <div className="Lobby">
            <header className="Lobby-header">
            <img src={logo} className="Lobby-logo" alt="logo" />
            <Link to='/Question'>Question</Link>
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
