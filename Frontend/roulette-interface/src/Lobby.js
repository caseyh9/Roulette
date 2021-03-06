import React from 'react';
import logo from './logo.svg';
import './Lobby.css';
import axios from 'axios';

class Lobby extends React.Component {
    constructor(props) {
        super(props);

        var player = this.props.appState.name;
        var roomId = this.props.appState.code;
        var handle = this.props.appState.handle;

        // var players = createOrLoadGame(player, roomId);
        // var handles = addHandles(handle);
        this.state = ({
            lobbyId: roomId,
            players: [], // players,
            handles: [], // handles,

        });
        console.log(this.state);

    }

    loadGame(player, roomId) {
        // load roomId from backend
        var shiz = axios.get();
        var p = []; var h = [];
        var i, j;
        for (i = 0; i < shiz.length(); i++) {
            for (j = 0; shiz[i][j] != "="; j++);
                p[i] = shiz[i].substring(0, j);
                h[i] = shiz[i].substring(j, shiz[i].length());
        }
//        createOrLoadGame(player, roomId);
        this.setState({
            lobbyId: roomId,
            players: [],
            handles: [],
        });
    }

    render() {
        return (
          <div>
            <button onClick={() => this.props.infinityWar(this.state.roomId, this.state.players, this.state.handles)}>
                Start Game
            </button>

            <button onClick={() => this.props.endGame()}>
                Quit
            </button>
          </div>
        );
    }
}

export default Lobby;
