// not a component, just snippet notes

// To Create and Automatically Export a new Functional Component
// rfce tab
// will default the name to the name of the file

import React from 'react'

function ES7Snippets() {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

// Same as above but Creates and Exports as an arrow function
// rafce tab

import React from 'react'

const ES7Snippets = () => {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

// Create and Export Class Component
// rce tab

import React, { Component } from 'react'

export class ES7Snippets extends Component {
  render() {
    return (
      <div>ES7Snippets</div>
    )
  }
}

export default ES7Snippets

// Create Constructor
// rconst tab

constructor(props) {
  super(props)

  this.state = {
     first
  }
}

// Console log
// clg tab

console.log(first)

// Log an object along with its name as a string
// clo tab

console.log('first', first)