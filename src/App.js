import React, { Component } from 'react';

import './App.css';

import Films from './components/Films';
import TvSeasons from './components/TvSeasons';

const sortByYear = (a, b) => (
  a.release > b.release ? 1 : -1
);

class App extends Component {
  constructor(props) {
    super(props);

    let films = props.films.sort(sortByYear);
    let tvSeasons = props.tv_seasons.sort(sortByYear);

    this.state = {
      films,
      tvSeasons,
      currentView: 'films'
    };
  }

  setCurrentView(view) {
    this.setState({
      currentView: view
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <button onClick={this.setCurrentView.bind(this, 'films')} className={ this.state.currentView === 'films' ? 'active' : '' }>Films</button>
          <button onClick={this.setCurrentView.bind(this, 'tvSeasons')} className={ this.state.currentView === 'tvSeasons' ? 'active' : '' }>TV Seasons</button>
        </div>

        <div className="App-Content">
          { this.state.currentView === 'films' && <Films films={this.state.films} /> }
          { this.state.currentView === 'tvSeasons' && <TvSeasons seasons={this.state.tvSeasons} /> }
        </div>
      </div>
    );
  }
}

export default App;
