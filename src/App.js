import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state  = {
    persons: [
      {name: 'Maksas', age: 28},
      {name: 'Manu', age: 30},
      {name: 'Clark', age:40}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 30},
      {name: 'Clark', age:21}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Vitalijus', age: 28},
      {name: event.target.value, age: 30},
      {name: 'Clark', age:21}
    ]})
  }
 
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blued',
      padding: '8px',
      cursos: 'pointer'
    }

    return (
      <div className="App">
       <h1>Hi I am react APP</h1>
       <button style={style} onClick={this.switchNameHandler.bind(this, 'Julijonas')}>Switch Name</button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}/>
       
       <Person 
       click={this.switchNameHandler.bind(this, 'Maksimiljanas')}
       changed={this.nameChangedHandler}
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}>My hbbie is racing</Person>
       
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
