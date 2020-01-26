import React from 'react';
import logo from './logo.svg';
import './Question.css';

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Question">
            <header className="Question-header">
            <img src={logo} className="Question-logo" alt="logo" />
            <p>
                Edit <code>src/Question.js</code> and save to reload.
            </p>
            <a
                className="Question-link"
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

export default Question;
