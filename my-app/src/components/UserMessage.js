// Functional: displays static information once rendered & don't have any interactivity
// Child of the state in NestingComponents.js

import React from 'react';

// Don't forget to add props in the parentheses!
function UserMessage(props) {
  return (
    <div>
        {/* this.state changes to props as we're passing in whether the user is logged in
        as a prop, not a state (functional has no states) */}
        {props.isLoggedIn ? (
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

export default UserMessage