// not required in the latest versions of React
// including it makes our component backwards compatible with earlier versions
import React from "react";

// Our stateless functional component
// can reuse this wherever by importing it into the relevant file

// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

// ES6 arrow function version of above function
// arrow functions are good for simple functions which just return a line
// or two of JSX
const FunctionalGreeting = () => <h1>Hello from React!</h1>



// won't do anything until we include it in the rest of the application
// need to export then import where we want to use it
// default means we can import using any name, not necessarily FunctionalGreeting
// it's convention to import with the same name, though, and avoids complications
export default FunctionalGreeting;