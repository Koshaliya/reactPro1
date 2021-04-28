import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons:[
      {name : 'Max' , age: 28},
      {name : 'Pix' , age: 12},
      {name : 'tid' , age: 14}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>
          Hi,this is my first react app.
        </h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <button>Switch Name</button>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Im testing</Person>
      </div>
      
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'heloooooo'));
  }
}

export default App;
