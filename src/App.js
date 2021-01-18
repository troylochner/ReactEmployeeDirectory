import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeDirectory from './components/EmployeeDirectory'

//import React, {useState} from "react"; - Used in testing a new build
//import TestComp from './components/TestComp' // This is just a test component.
// import Hello from "./sayHello"; just playing around and testing. 

//STEP BY STEP TESTS FOR MYSELF
//THIS IS RENDERED ON LINE 7 of index.js
//THIS THEN RENDERS ON OUR PUBLIC index.html ROOT DIV
/*
function App(){
 const [users, setUsers]= useState([
   { name:"Troy", message:"Hi Troy"},
   { name:"Tiffany", message:"Hi Tiffany"},
   { name:"Trooper", message:"Hi Trooper"},
 ])

return (<div>
  {users.map(user=>(
    <TestComp name={user.name} message={user.message}/>
  ))}
</div>)
}*/

//KEEP COMPONENTS SIMPLE --> HEADER + FOOTER ; EMPLOYEE DIRECTORY WILL CONTAIN TWO SUB-COMPONENTS --> A HEADER + ROW DATA --> ALL LOGIC WILL BE CONTAINTED IN EMPLOYEE DIRECTORY
function App() {
  return (
      <div>
        <Header/> 
        <EmployeeDirectory/>
        <Footer/>
      </div>
  );
}

export default App;
