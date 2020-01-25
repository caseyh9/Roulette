import React from 'react';
import logo from './logo.svg';
import './Final.css';

class Final extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Final">
            <header className="Final-header">
            <img src={logo} className="Final-logo" alt="logo" />
            <p>
                Edit <code>src/Final.js</code> and save to reload.
            </p>
            <a
                className="Final-link"
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

export default Final;
