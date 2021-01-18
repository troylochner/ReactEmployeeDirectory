import React from 'react';
import "./style.css";

function TestComp({name,message}){

    return(
        <div className='testSeg'>
            <h3>{name}</h3>
            <h4>{message}</h4>
        </div>
    )
};

export default TestComp;