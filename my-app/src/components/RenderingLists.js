import React from 'react'
import Book from './Book'

// using JavaScript mapping to render looping lists

function RenderingLists() {

    const bookList = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {
            title: 'to kill a mockingbird',
            author: 'harper lee',
            pages: '281'
        },
        {
            title: 'the great gatsby',
            author: 'f. scott fitzgerald',
            pages: '218'
        },
        {
            title: 'the catcher in the rye',
            author: 'j. d. salinger',
            pages: '234'
        }
    ]


    return (
        <div>
            {bookList.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr />
            {
                books.map(book => {
                    // Don't forget the parentheses after return!
                    return (
                        <div key={book.title}>
                            <h5>{book.title}</h5>
                            <p>{book.author}</p>
                            <p>{book.pages}</p>
                        </div>
                    )
                })
            }
            <hr />
            {/* Refactored version of above books.map */}
            {
                // books.map again refers to the array at the top of the file
                books.map(book => {
                    // This is the child component from Book.js
                    return <Book key={book.title} book={book}/>
                })
            }
        </div>
  )
}

export default RenderingLists