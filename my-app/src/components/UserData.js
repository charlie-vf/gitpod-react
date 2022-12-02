// Functional: displays static information once rendered & don't have any interactivity
// Child of the state in NestingComponents.js

import React from 'react'

// Don't forget to add props in the parentheses!
function UserData(props) {
  return (
    <div>
        {/* and change this.state to props */}
        <h1>{props.isLoaded ? 'Data Loaded!' : 'Loading...'}</h1>
    </div>
  )
}

export default UserData