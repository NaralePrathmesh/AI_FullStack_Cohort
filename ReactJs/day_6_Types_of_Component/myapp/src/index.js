import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);





// class component
  // old way in React
  // Can hold data(state)
  // Reusable



// render() method
  // Used only in class component
  // used to return JSX code for display or render component data on browser


  // State
    // It is builtIn functionality in class component to holds the data in our component
    // builtin object in ReactJS
    // It is mutable , we can change our state whenever we want on any specific event