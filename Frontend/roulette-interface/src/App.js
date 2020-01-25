import React from 'react';
import FrontPage from './FrontPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        /*
        0: FrontPage
        1: Lobby
        2: Game
        */
        this.state = {
            view: 0,
        };

        this.changeView = this.changeView.bind(this);
    }

    changeView(num) {
        this.setState({
            view: num,
        });
    }

    render() {
        switch (this.state.view) {
            case 0: return <FrontPage changeView={ this.changeView } />;
            case 1: return <Lobby changeView={ this.changeView } />;
            case 2: return <Game changeView={ this.changeView } />;
        }
    }
}

export default App;
