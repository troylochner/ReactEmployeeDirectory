import React from 'react';

function Hello(){

    const sayHi = () =>{
        console.log("hi butthead");
      } 
    


    return (
        <div>
            <button onClick={sayHi}>Say Hello</button>
        </div>
    )
}

export default Hello;