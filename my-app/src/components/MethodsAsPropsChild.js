import React from 'react'

function MethodsAsPropsChild(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    // Wrap in divs as React only wants to return one element from a component
                    // If isLoggedIn is true:
                    <div>
                        <p>Welcome to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Confirm your email</li>
                            <li>Complete your profile</li>
                            <li>Subscribe to the newsletter</li>
                        </ol>
                        <button onClick={props.handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    // If isLoggedIn is false:
                    <div>
                        <p>Please sign in</p>
                        {/* This component is functional so has no state
                        Can't change isLoggedIn property from here
                        Whether the user is logged in is passed to the child as a prop
                        Need to callback to the parent to update its state and rerender the component
                        with the new props
                        Therefore, create the clickHandler in the parent and pass down to
                        the child as a prop */}
                        <button onClick={props.handleSignIn}>Sign In</button>
                    </div>
                )
            }
        </div>
    )
}

export default MethodsAsPropsChild