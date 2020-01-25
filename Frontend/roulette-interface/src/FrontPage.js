import React from 'react';
import logo from './logo.svg';
import './FrontPage.css';

class FrontPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FrontPage">
            <header className="FrontPage-header">
            <img src={logo} className="FrontPage-logo" alt="logo" />
            <p>
                Edit <code>src/FrontPage.js</code> and save to reload.
            </p>
            <a
                className="FrontPage-link"
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

export default FrontPage;
