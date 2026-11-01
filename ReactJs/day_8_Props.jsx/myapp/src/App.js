
import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    id: 1,
    name: "Prathmesh"
  });

  const UpdateState = () => {
    setState({
      id: 2,
      name: "Narale"
    });
  };

  return (
    <>
      <h1>ID: {state.id}</h1>
      <h1>Name: {state.name}</h1>

      <button onClick={UpdateState}>
        Update State
      </button>
    </>
  );
}

export default App;

