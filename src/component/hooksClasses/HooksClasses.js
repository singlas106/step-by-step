



































// import React, { useState } from 'react';  
  
// class HooksClasses extends React.Component {  
//   constructor(props) {  
//     super(props);  
//     this.state = {  
//       count: 0  
//     };  
//   }  
//   render() {  
//     return (  
//       <div>  
//         <p><b>You clicked {this.state.count} times</b></p>  
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>  
//           Click me  
//         </button>  
//       </div>  
//     );  
//   }  
// }  
// export default HooksClasses;  




// import React, { useState } from 'react';  
  
// function HooksClasses() {  
//   const [count, setCount] = useState(0);  
//     return (  
//         <div>  
//             <p><b>You clicked {count} times</b></p>  
//             <button onClick={() => setCount(count + 1)}>  
//             Click me  
//             </button>  
//         </div>   
//     );  
// }  
// export default HooksClasses;  









































// import { useState, useEffect } from "react";

// function HooksClasses() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`You have clicked the button ${count} times`)
//   });

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <p>count should increase by {count}</p>
//     </div>
//   );
// }

// export default HooksClasses;







// useEffect(() => {
//     console.log(`You have clicked the button ${count} times`)
//   }, []);

// in this only 1 time it will render



























// import React, { useEffect, useState } from 'react';

// function HooksClasses() {
//     const [name, setName] = useState("");

//     return(
//         <div>
//             <form>
//                 name: <input type="text" placeholder="write your name" value={name}
//                         onChange={(e) => setName(e.target.value)} />
//                 <p>{name}</p>
//             </form>
//         </div>
//     )
// }

// export default HooksClasses;






























// import React, { useEffect, useState } from 'react';

// function HooksClasses() {
//     const [color, setColor] = useState("");

//     const colors = () => {
//         setColor("purple");
//     };

    

//     return(
//         <div>
//             <h1>My fav color is {color}!</h1>
//             <button onClick={() => setColor("blue")}>blue!</button>
//             <button onClick={() => setColor("orange")}>orange!</button>
//             <button onClick={colors}>purple!</button>
//             <button onClick={() => setColor("yellow")}>yellow!</button>
//         </div>
//     )
// }

// export default HooksClasses;




































// /*import React, { useEffect, useState } from 'react';

// function HooksClasses() {
//     const [count, setCount] = useState(0);
//     const [age, setAge] = useState(23);
//     const [fruit, setFruit] = useState("banana");

//     useEffect(() => {
//         alert(`u aged ${age} times`);
//     })

//     return(
//         <div>
//             <h1>{`Hii you have clicked ${count} times`}
//             <button onClick={() => setCount(count + 1)}>Click me!!</button></h1>
//             <h1>{`Hii you aged ${age} times`}
//             <button onClick={() => setAge(age + 1)}>Get Aged!!</button></h1>
//             <h1>{`Hii your favourate fruit is ${fruit}`}
//             <button onClick={() => setFruit("apple")}>favourate fruit!!</button></h1>
//         </div>
//     )
// }

// export default HooksClasses; /*


















// /*import React, { useState } from 'react';

// function HooksClasses() {
//     const [count, setCount] = useState(0);
//     return(
//         <div>
//             <h1>{`Hii you have clicked ${count} times`}
//             <button onClick={() => setCount(count + 1)}>Click me!!</button></h1>
//         </div>
//     )
// }

// export default HooksClasses;/*















import React, { useState } from 'react';


const HooksClasses = () => {
    const [state, setState] = useState({ age: 0, siblingsNum: 0 })
    const { age, siblingsNum } = state
  
    return (
      <div>
        <p>Today I am {age} Years of Age</p>
        <p>I have {siblingsNum} siblings</p>
  
        <div>
          <button onClick={() => setState({...state, age: age +1})}>Get older!</button>
          <button onClick={() => setState({...state, siblingsNum: siblingsNum +1})}>
            More siblings!
          </button>
        </div>
      </div>
    )
  }

  export default HooksClasses;