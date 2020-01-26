import React from 'react';
import logo from './logo.svg';
import './Game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            index: 0,
            correct_index: 0,
            options: [],
            player_data: [];
        });
        this.tweets = this.props.appState.tweets;
        this.handles = this.props.appState.handles;
        // window.setInterval(render(), milliseconds);

    }

    getChoices(){
        correct_index = Math.floor((Math.random() * this.handles.length())+1);
        var arr = [];
        arr[correct_index] = this.tweets[index].handle;

        for(int i =0;i<4;i++){
            if(i != correct_index){
                do {
                    arr[i] = this.tweets[Math.floor((Math.random() * this.handles.length())+1)].handle;
                } while(arr[i] == arr[correct_index]);
            }
        }
        this.setState({
            options: arr,
            player_data: axios.get(`ws://localhost:8000/getAllPlayerData=${this.props.appState.roomId}`
        });

    }

    makeChoice(num) {
        goNext(this.props.appState.player, this.state.options[num] , this.state.options[this.state.correct_index]);
        this.setState({index: index+1});
    }

    render() {
        getChoices();
        <div>
            <p>
                {this.tweets.tweet}
                </p>
        <button onClick={makeChoice(0)}>
            {this.state.options[0]}
        </button>
        <button onClick={makeChoice(1)}>
            {this.state.options[1]}
        </button>
        <button onClick={makeChoice(2)}>
            {this.state.options[2]}
        </button>
        <button onClick={makeChoice(3)}>
            {this.state.options[3]}
        </button>
        return (
          <h1>Game Page</h1>
        );
    }
}

export default Game;
