import React from 'react';
import logo from './logo.svg';
import './Game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.tweets = [
          {
            "text": "xd",
            "correct": "a",
            "answers": ["a", "b", "c", "d"]
          },
          /* {

          }, */
        ];

    }

    render() {
        return (
          <h1></h1>
        );
    }
}

export default Game;
