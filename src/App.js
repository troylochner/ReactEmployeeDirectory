import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeDirectory from './components/EmployeeDirectory'
import "./components/directory.css";

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
