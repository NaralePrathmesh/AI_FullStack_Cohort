import React from "react";


const App=()=>{
    return(
        <>
            <h1>Welcome to stateless functional components</h1>
        </>
    )
}


let name="Prathmesh"


const App2=()=>{
    console.log("Heyy ReactJS")
}



export default App;         // default export
export {App2}               // name export
export {name}               // name export









// Every Component return JSX code

// import and export -: each and every JS file is module and each module we need to export  for reusability
        // default export - only one
        // name export - multiple we can export