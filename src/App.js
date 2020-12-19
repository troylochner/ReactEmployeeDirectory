import React from "react";
import Wrapper from "./components/Wrapper";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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
