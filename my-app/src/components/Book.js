import React from 'react'

// refactored version of putting all the JSX in RenderingLists.js

function Book(props) {

    // Component receives object from parent return child as a prop
    // and sets it equal to book so we can use it in the return statement
    const book = props.book

  return (
    <div>
        <h5>{book.title}</h5>
        <p>{book.author}</p>
        <p>{book.pages}</p>
    </div>
  )
}

export default Book