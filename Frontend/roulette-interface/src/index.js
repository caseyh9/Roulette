import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//const routing = (
    // <Router>
    //     <div>
    //         <Route exact path='/' component={FrontPage} />
    //         <Route path='/Lobby' component={Lobby} />
    //         <Route path='/Game' component={Game} />
    //         <Route path='/Final' component={Final} />
    //     </div>
    // </Router>
    //<App />
//)

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
