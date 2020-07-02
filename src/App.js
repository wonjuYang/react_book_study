import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <ScrollBox ref={(ref) =>this.ScrollBox=ref} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨밑으로
        </button>

      </div>
          )
  }
}

export default App;
