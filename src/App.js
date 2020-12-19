import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
        <Header /> 
        <Main />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
