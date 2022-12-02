import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {

    // State property
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         isLoggedIn: false,
      }
    }

  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? 'Data Loaded!' : 'Loading...'}</h1>
        {/* Render multiple lines of code conditionally: */}
        {/* As usual, the first set of parantheses is for if the condition is true
        and the second is for if the condition is false */}
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the steps below:</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Complete your profile</li>
                    <li>Subscribe to the newsletter</li>
                </ol>
            </div>
        ) : (<p>Please sign in!</p>)}
      </div>
    )
  }
}

export default ConditionalRenderingClass