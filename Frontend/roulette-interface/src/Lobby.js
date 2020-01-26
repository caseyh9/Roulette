import React from 'react';
import logo from './logo.svg';
import './Lobby.css';
import { Link } from 'react-router-dom';

class Lobby extends React.Component {
    constructor(props) {
        super(props);

        var player = this.props.appState.name;
        var roomId = this.props.appState.code;
        var handle = this.props.appState.handle;

        // var players = createOrLoadGame(player, roomId);
        // var handles = addHandles(handle);
        this.setState({
            lobbyId: roomId,
            players: [], // players,
            handles: [], // handles,
        });
    }

    loadGame(player, roomId) {
        // load roomId from backend
        //var playerz = createOrLoadGame(player, roomId);
        this.setState({
            lobbyId: roomId,
            players: [],
            handles: [],
        });
    }

    render() {
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
