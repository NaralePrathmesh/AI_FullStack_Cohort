
import React from 'react';

class App extends React.Component {
    constructor(){
      super();

      this.state={
        count:0
      }
    }

    IncreaseCount = () => {
      this.setState({
        count: this.state.count + 1
      });
    };



  render() {
    return (
      <>
          <h1>{this.state.count}</h1>
          <button onClick={()=>this.IncreaseCount()}>IncreaseCount</button>
      </>
    );
  }
}

export default App;
