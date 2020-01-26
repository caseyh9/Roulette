import React from 'react';
import FrontPage from './FrontPage';
import Lobby from './Lobby';
import Game from './Game';

class App extends React.Component {
    constructor(props) {
        super(props);

        /*
        0: FrontPage
        1: Lobby
        2: Game
        */
        this.state = {
            code: "",
            handle: "",
            name: "",
            view: 0,
            players: [],
            handles: [],
        };


        this.changeFront = this.changeFront.bind(this);
        this.changeLobby = this.changeLobby.bind(this);
        this.changeGame = this.changeGame.bind(this);
    }

    changeFront() {
        this.setState({
            code: "",
            handle: "",
            name: "",
            view: 0,
        });
    }

    changeLobby(code, handle, name) {
        this.setState({
            code: code,
            handle: handle,
            name: name,
            view: 1,
        });
    }

    changeGame(players, handles) {
        this.setState({
            players: players,
            handles: handles,
            view: 2,
        });
    }

    render() {
        switch (this.state.view) {
            case 0: return <FrontPage changeLobby={ this.changeLobby } />;
            case 1: return <Lobby appState={this.state} infinityWar={ this.changeGame } endGame={this.changeFront} />;
            case 2: return <Game appState={this.state} endGame={ this.changeFront } />;
        }
    }
}

export default App;
