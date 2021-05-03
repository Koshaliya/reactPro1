import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


//   state = {
//     persons:[
//       {name : 'Max' , age: 28},
//       {name : 'Pix' , age: 12},
//       {name : 'tid' , age: 14}
//     ]
//   }

//   switchNameHandler= () =>{
//     this.setState({
//       persons:[
//         {name:'xix',age:84},
//         {name:'xix',age:84},
//         {name:'xix',age:84}
//       ]
//     })
//   }
class App extends Component{

  state ={
    persons: [
      { id:'1aa',name: 'Max', age: 28 },
      { id:'2aa',name: 'Pix', age: 12 },
      { id:'3aa',name: 'tid', age: 14 }
    ],
    otherState: 'some other value',
    showPersons:false
  }
    
  

  // const [otherState, setOtherState] = useState(
  //   'some other value'
  // );

   //switchNameHandler = (newName) => {
    // setPersonState({
    //   persons: [
    //     { name: 'xix', age: 84 },
    //     { name: 'xix', age: 84 },
    //     { name: 'xix', age: 84 }
    //   ],
    //   otherState: personState.otherState
    // });
  //   this.setState({
  //     persons: [
  //           { name: newName, age: 84 },
  //           { name: 'xix', age: 84 },
  //           { name: 'xix', age: 84 }
  //         ],
  //   });
  // };

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }


  deletePersonHandler = (personIndex)=>{
    const persons = [...this.state.persons]; //slice
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  togglePersonsHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
            click ={ () =>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=> this.nameChangedHandler(event,person.id)}
            />
          })}
          
        </div>
      );
    }
  

  //console.log(personState, otherState);
  return (
    <div className="App">
      <h1>
        Hi,this is my first react app.
        </h1>     
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons
      </button>
      {persons}
    </div>

  );
  }
  //return React.createElement('div',{className:'App'},React.createElement('h1',null,'heloooooo'));
};


export default App;
