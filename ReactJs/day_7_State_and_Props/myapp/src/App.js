import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 1,
      name: "Prathmesh",
      skill: "AI Fullstack Developer"
    };
  }

  // Event 1: Normal function inside render
  // Event 2: Arrow function class property
  Demo2 = () => {
    alert("Function Calling 2");
  };

  // Event 3: Normal method
  Demo3() {
    alert("Function Calling 3");
  }

  // Update state
  UpdateSkill = () => {
    this.setState({
      skill: "MERN Stack Developer"
    })
  }

  render() {
    // Event 1: Function inside render
    function Demo() {
      alert("Function Calling 1");
    }

    return (
      <>
        <h1>Id: {this.state.id}</h1>
        <h1>Name: {this.state.name}</h1>
        <h1>Skill: {this.state.skill}</h1>

        {/* Event 1 */}
        <button onClick={Demo}>Click 1</button>

        {/* Event 2 */}
        <button onClick={this.Demo2}>Click 2</button>

        {/* Event 3 */}
        <button onClick={() => this.Demo3()}>Click 3</button>

        <hr />

        {/* Update skill */}
        <button onClick={this.UpdateSkill}>
          Update Skills
        </button>
      </>
    );
  }
}

export default App;



// state
  // It a builtin object in ReactJs
  // Used to hold the component state / data
  // data storage functionality in react like JS variable
  // Mutable - we can change or update our state on specific event
  // here virtual DOM works - when we update something it will not reloads our page


// constructor
  // used in class
  // is a special type of function in a class
  // it is call automatically when component is created
  // we can passed methods in constructor
