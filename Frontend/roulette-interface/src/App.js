import React from 'react';
import FrontPage from './FrontPage';
import Lobby from './Lobby';
import Game from './Game';
import Stomp from 'stompjs';
import axios from 'axios';


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
            tweets: []
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
        // Mark added this
        const ws = ("ws://localhost:8080/sock");
        var client = Stomp.client(ws);
        client.connect({}, function() {
            client.subscribe(code);
            client.send(code, {"sender": name, "handle": handle, "type": "JOIN"})
            //client.send("room yo", {"sender":"Casey","content":"test content","type":"CHAT"}); // Sent Message/vote
        });
    }

    changeGame(roomId, players, handles) {
        this.setState({
            players: players,
            handles: handles,
            view: 2,
            tweets: axios.get(`ws://localhost:8000/getAllTweetData=${roomId}`)
        });
    }

    goNext(name, choice, answer){
        client.send(this.state.code, {"sender": name, "content": choice, "answer": answer, "type": "CHAT"})
    }

    render() {
        switch (this.state.view) {
            case 0: return <FrontPage changeLobby={ this.changeLobby } />;
            case 1: return <Lobby appState={this.state} infinityWar={ this.changeGame } endGame={this.changeFront} />;
            case 2: return <Game appState={this.state} goNext={this.goNext} endGame={ this.changeFront } />;
        }
    }
}

export default App;
