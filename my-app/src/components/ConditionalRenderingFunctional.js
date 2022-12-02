import React from 'react'

// Render one thing if connected is true
// render something else if connected is false
function ConditionalRenderingFunctional(props) {
  return (
    <div>
        {/* Ternary Conditional statement */}
        {/* If props.connected is true, render the string 'Connected' */}
        {/* While connected=true in App.js, it will render 'Connected' */}
        <h1>{props.connected ? 'Connected' : 'Not Connected'}</h1>
    </div>
  )
}

export default ConditionalRenderingFunctional