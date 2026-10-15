import React from 'react';
import ReactDOM from 'react-dom/client';

// import css file in this file
import './index.css';


// JS variables
let name='Prathmesh';
let skill='ReactJS';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  
  <React.StrictMode>
      <h1>Welcome To Modern JSX code</h1>


      <div className="box1" style={{height:'400px',width:'400px',backgroundColor:'black'}}></div>

      {/* {JS Code} */}
      <h1>Welcome Dear {name}  your Skill is {skill} </h1>



      {/* {media and assets} */}
      {/* public folder - applications has by default access of public folder */}

      <img src="flower.jpg" style={{height:'500px',width:'300px'}} alt="" />



  </React.StrictMode>
);







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// Fragment types -:
// 	1.empty wrapper - <> </>
// 	2.<React.Fragment></React.Fragment>
// 	3.<React.StrictMode></React.StrictMode>   It shows and highlights the potential issues and warnings in our application


//-------------------------------------------------------------------------------------------------------------------------------


// JSX code -: JavaScript XML or Extension of JS
// we can write html and JS code together in single file

//-------------------------------------------------------------------------------------------------------------------------------

// Rules to write JSX code
  // 1. must have opening and closing tag / fragment
  // 2. CSS style - {{property:value}}
  // 3. JS rendering - {}


//-------------------------------------------------------------------------------------------------------------------------------

    // className instead of class in react

//-------------------------------------------------------------------------------------------------------------------------------

    // {media and assets}
      // public folder - applications has by default access of public folder

//-------------------------------------------------------------------------------------------------------------------------------

    // Virtual Dom -: A lightweight representation / copy of Actual DOM
    // Stored in browser memory
    // React updates the virtual DOM first -> then updates only the changed part in Real DOM
    // Make react app faster

    // Diffing Algorithm -: Use by react to compare old virtual dom with new virtual dom

//-------------------------------------------------------------------------------------------------------------------------------

