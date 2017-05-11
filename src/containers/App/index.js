import React, { Component } from 'react';

import {
  Button
} from '../../components';

import {
  Header
} from '../../containers';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
  }

  onBtnClick = (id) => {
    // console.log('onBtnClick: ', id);
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <Button action={this.onBtnClick} id="appButton" />
        </section>
        <p className="App-intro">
          Button clicked <strong>{this.state.clicks}</strong> times.
        </p>
      </div>
    );
  }
}

export default App;
