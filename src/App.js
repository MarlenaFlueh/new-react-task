import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';

class App extends Component {

  state = {
    input: ''
  };

  onChangeHandler = (event) => {
    this.setState(
      {
        input: event.target.value
      }
    )
  };

  render() {
    return (
      <div>
        <h1>New Application</h1>
        <input onChange={this.onChangeHandler}/>
        <p>{this.state.input.length}</p>
        <Validation length={this.state.input.length}/>
      </div>
    );
  }
}

export default App;
