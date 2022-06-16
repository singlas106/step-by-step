import React, { useContext } from 'react';
import { userContext } from './Component1';




function Component2(){
    const user= useContext(userContext)
    return(
        <h1>{`hello again bhai ${user}`}</h1>
    );
}

export default Component2;