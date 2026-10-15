import React from 'react';
import ReactDOM from 'react-dom/client';

const date=()=>{
  setInterval(()=>{
      let data=new Date().toLocaleTimeString();
      console.log(data)
      document.getElementById('Today').innerHTML=data;
    },1000)
}
date()
// console.log(date())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div style={{height:'550px',width:'600px', backgroundColor:'skyblue',marginLeft:'500px',marginTop:'50px',borderRadius:'50px',padding:'30px'}}>

        <div style={{height:'200px',width:'600px', backgroundColor:'red',marginTop:'20px',borderRadius:'30px'}}>
              <img src="summit.jpg" style={{height:'200px',width:'600px',borderRadius:'30px'}} />
        </div>

        <h1 style={{textAlign:'center'}}>Tech Summit 2026</h1>
        <p style={{textAlign:'center',fontSize:'20px'}}>Innovation In Modern Web Developement</p>

        <div style={{height:'100px',width:'580px', backgroundColor:'gray',marginTop:'20px',borderRadius:'30px',padding:'9px'}}>
              <h3 style={{textAlign:'center'}}>
                  Event Date & Time
              </h3>
              <h4 style={{textAlign:'center'}}>15 October 2026, 9:30 AM</h4>
        </div>

        <h3 style={{textAlign:'center',color:'green'}}>Live Now: <span id='Today'></span></h3>


    </div>



  </React.StrictMode>
);

