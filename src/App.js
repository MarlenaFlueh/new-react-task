import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    inputText: '',
  };

  onChangeHandler = (event) => {
    this.setState(
      {
        inputText: event.target.value
      }
    )
  };

  deleteBoxHandler = (boxIndex) => {
    const inputText = this.state.inputText.split('');
    inputText.splice(boxIndex, 1);
    this.setState({inputText: inputText.join('')});
  }

  render() {
    return (
      <div>
        <h1>New Application</h1>
        <input onChange={this.onChangeHandler}/>
        <p>{this.state.inputText.length}</p>
        <Validation length={this.state.inputText.length}/>
        {this.state.inputText.split('').map((char, index) => {
          return <Char name={char} key={index}
          click={() => this.deleteBoxHandler(index)}/>
        })}
      </div>
    );
  }
}

export default App;
