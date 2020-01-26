import React from 'react';
import logo from './logo.svg';
import './Game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            choice: "";
        });
        this.tweets = this.props.appState.tweets;
        window.setInterval(render(), milliseconds);

    }

    render() {
        <p>
            {this.tweets.tweet}
        </p>
        <button>

        </button>
        <button>

        </button>
        <button>

        </button>
        <button>

        </button>
        return (
          <h1>Game Page</h1>
        );
    }
}

export default Game;
