import React, { Component } from 'react'

export class ControlledForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comments: ''
      }
    }

    // //
    // // This is commented as its over complicated but fully demosntrates what's happening

    // // called each time the form element changes, e.g. when someone types something
    // // event itself is explicitly passed into the handler as a parameter
    // // so, the arrow function will take a parameter called event
    // handleNameChange = (event) => {
    //     // this variable will represent the value of the form field each time the onChange
    //     // event is triggered
    //     let newValue = event.target.value
    //     console.log(newValue)
    //     // the above will update the field, but the React state will keep reverting back
    //     // to the empty string. The console will also log each letter inputed individually,
    //     // rather than cumulatively
    //     // so, we need to update the state
    //     // this will also show the console logging the field cumulatively as each letter
    //     // is added
    //     this.setState({
    //         name: newValue
    //     })
    // }

    // this is the neater version
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        // prevents form default behaviour of submitting data in a GET request
        // and refreshing the page
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your name:</label>
                        {/* We want this input's value to be the same as whatever the value of name
                        is in the state to give control to React */}
                        <input 
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            id="id-name"
                            name="name"
                            type="text" 
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select
                            onChange={this.handleCategoryChange}
                            value={this.state.category}
                            id="id-category"
                            name="category"
                        >
                            <option value="website">Website Issue</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General Inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Commments:</label>
                        <textarea
                            onChange={this.handleCommentsChange}
                            value={this.state.comments}
                            id="id-comments"
                            name="comments"
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm