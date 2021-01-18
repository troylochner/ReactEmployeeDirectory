import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeDirectory from './components/EmployeeDirectory'

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
