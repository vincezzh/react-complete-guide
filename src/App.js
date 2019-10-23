import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Vince', age: 36},
            {name: 'Sukie', age: 35},
            {name: 'Mavis', age: 6},
            {name: 'Lucas', age: 5}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 36},
                {name: 'Sukie Ren', age: 35}
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Vince', age: 36},
                {name: event.target.value, age: 35},
                {name: 'Mavis', age: 6},
                {name: 'Lucas', age: 5}
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map(person => {
                    return <Person
                        name={person.name}
                        age={person.age}
                    ></Person>
                })}
            </div>
        );
    }

    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button
              style={style}
              onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
    );
  }
}

export default App;
