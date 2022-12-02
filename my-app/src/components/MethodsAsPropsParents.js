import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    // Realistically, it would make more sense to make the child component stateful
    // and define the sign in & sign out functionality there
    // Which would keep the child component completely independent of the parent

    // Arrow function so don't need to bind it
    handleSignIn = () => {
        this.setState({
            isLoggedIn: true
        })
        console.log(this)
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false
        })
        console.log(this)
    }

      // single method that handles both SignIn and SignOut
    // toggleIsLoggedIn = () => {
    //     this.setState((prevState) => ({
    //     isLoggedIn: !prevState.isLoggedIn,
    //     }));
    // };

    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                    isLoggedIn={this.state.isLoggedIn}
                    // No parentheses as not calling the function, we're passing it down
                    // to the child to use it there
                    handleSignIn={this.handleSignIn}
                    handleSignOut={this.handleSignOut}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent