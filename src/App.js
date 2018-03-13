import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    input: '',
    charBox: '',
    haveInput: false
  };

  onChangeHandler = (event) => {
    this.setState(
      {
        input: event.target.value,
        haveInput: true 
      }
    )
  };

  createCharBox = () => {
    this.setState(
      {
        
      }
    )
  }

  render() {

    if (this.state.haveInput) {
      charBox: (
        <div>
          {this.state.input.map(() => {
            return <Char 
            changed={(event) => this.onChangeHandler(event)}/>
          })}
        </div>
      )
    }

    return (
      <div>
        <h1>New Application</h1>
        <input onChange={this.onChangeHandler}/>
        <p>{this.state.input.length}</p>
        <Validation length={this.state.input.length}/>
        <Char />
      </div>
    );
  }
}


export default App;
