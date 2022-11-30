import React from "react";


// const FunctionalGreetingWithProps = (props) => <h1>Hello!</h1>

/*
    in dev tools -> console
    shows that props contains a key called greeting with value 'Nice to meet you!'
    {greeting: 'Nice to meet you!'}
    greeting: "Nice to meet you!"
*/
const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello, {props.name}. I see you're {props.age} - {props.greeting}</h1>;
}

export default FunctionalGreetingWithProps;