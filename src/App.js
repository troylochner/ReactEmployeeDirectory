import React from "react";
//import React, {useState} from "react"; - Used in testing a new build
import Wrapper from "./components/Wrapper";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import Hello from "./sayHello"; just playing around and testing. 
import TestComp from './components/TestComp' 

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


function App() {
  return (
      <div>
        <Wrapper>
        <Header /> 
        <Main />  
        <Footer/>
        </Wrapper>
      </div>
  );
}

export default App;
