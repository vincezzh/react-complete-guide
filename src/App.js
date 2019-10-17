import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Vince', age: 36},
            {name: 'Sukie', age: 35}
        ]
    }

    switchNameHandler = () => {
        this.setState({
            persons: [
                {name: 'Vince Zhang', age: 36},
                {name: 'Sukie Ren', age: 35}
            ]
        })
    }

  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      </div>
    );
  }
}

export default App;
