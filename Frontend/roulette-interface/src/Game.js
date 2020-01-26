import React from 'react';
import logo from './logo.svg';
import './Game.css';
import axios from 'axios';

class Game extends React.Component {
    constructor(props) {
        super(props);
        
        this.tweets = this.props.appState.tweets;
        this.handles = this.props.appState.handles;
        // window.setInterval(render(), milliseconds);
        console.log(this.handles);
        // let correct_index = 0;
        // let options = [];
        // let player_data = [];
        // this.getChoices = this.getChoices.bind(this);

        this.state = ({
          index: 0,
          correct_index: 0,
         options: [],
         player_data: []
        });

        var index = Math.floor((Math.random() * this.handles.length+1));

        if (this.state.index >= this.handles.length) this.props.endGame();
        this.state.correct_index = Math.floor((Math.random() * this.handles.length+1));
        var arr = [];
        console.log("yooooo " + this.tweets);
        arr[this.state.correct_index] = this.tweets[this.state.index].handle;
        var i;
        var tweetslol = [];
        for (i = 0; i < this.tweets.length; i++) {
          tweetslol.push(this.tweets[i].handle);
        }
        tweetslol.sort(() => Math.random() - 0.5);

        for (i = 0; i < 4; i++) {
          if (i != this.state.correct_index) {
            arr[i] = tweetslol[i];
          }
        }

        this.state = ({
          index: this.state.index,
          correct_index: 0,
         options: arr,
         player_data: axios.get(`ws://localhost:8080/getAllPlayerData=${this.props.appState.roomId}`)
        });
    }

    makeChoice(num) {
        console.log(num);
        this.goNext(this.props.appState.player, this.state.options[num] , this.state.options[this.state.correct_index]);
        this.setState({index: this.state.index+1});
    }

    render() {
        return (
          <div>
              <p>
                  {this.tweets.tweet}
              </p>
          <button onClick={() => this.makeChoice(0)}>
              {this.state.options[0]}
          </button>
          <button onClick={() => this.makeChoice(1)}>
              {this.state.options[1]}
          </button>
          <button onClick={() => this.makeChoice(2)}>
              {this.state.options[2]}
          </button>
          <button onClick={() => this.makeChoice(3)}>
              {this.state.options[3]}
          </button>
            <h1>Game Page</h1>
            </div>
        );
    }
}

export default Game;
