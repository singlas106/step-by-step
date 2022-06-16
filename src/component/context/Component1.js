import React, { useState, createContext } from 'react';
import Component2 from './Component2';

export const userContext = createContext()


function Component1() {
    const[user, setUser] = useState("shubham");
    return(
            <userContext.Provider value = {user}>
                     <h1>{`hello ${user}, nice to meet uh..!!`}</h1>
                     <Component2 user={user}/>
            </userContext.Provider>
    )
}
export default Component1;