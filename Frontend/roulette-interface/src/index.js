import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FrontPage from './FrontPage';
import Lobby from './Lobby';
import Question from './Question';
import Scoreboard from './Scoreboard';
import Final from './Final';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <Route exact path='/' component={FrontPage} />
            <Route path='/Lobby' component={Lobby} />
            <Route path='/Question' component={Question} />
            <Route path='/Scoreboard' component={Scoreboard} />
            <Route path='/Final' component={Final} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
