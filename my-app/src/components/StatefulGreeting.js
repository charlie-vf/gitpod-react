import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // initial value of introduction message
            introduction: "Hello,",
            // button to trigger change in introduction & button's text
            buttonText: "Exit",

        };
    }

    handleClick() {
        // call this.SetState & provide the new object we want to use in the state
        // in this case, it is an object with the property 'introduction' set to 'goodbye'
        this.setState({
            // not this. as we're setting the property to a new value, not getting it from
            // the existing state
            introduction: "Goodbye!",
        });
        console.log(this.state.introduction);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}</h1>
                {/* 
                    onClick arrow function calls the handleClick method when button is clicked - 
                    updates state.
                    handleClick could be called anything, but it's good practice to name things
                    what they actually do/are - this is a click handler
                */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;