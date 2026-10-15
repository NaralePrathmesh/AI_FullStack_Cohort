import React from 'react';
import ReactDOM from 'react-dom/client';

// import App.jsx
import App from './App'

// import App2 and name import
import { App2,name } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      {/* Component calling */}
      <App/>

      <h1>{App2()}</h1>

      <h1>Welcome to JSX</h1>
  </React.StrictMode>
);









// Components -:
    // Building block of react app
    // helps to build single page application
    // we can reuse components , Easy to use , Each part of code is separated
    // shows UI using JSX in small piece of code

// SPA - Single Page Applications
      // Not reloading when redirect to another page again and again
      // Faster and smooth

// MPA - Multi Page Applications
      //  Reload when redirect to another page again and again
      // Slower


// Types of component -:
  //  1. Functional Components(Stateless) -:
            // Simple and easy
            // Reusable
            // No state (no data storage inside component)
            // No render()
            // Hooks and extra features

  //  2. Class Components(Stateful) -: