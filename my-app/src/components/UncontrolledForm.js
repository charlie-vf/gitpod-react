import React, { Component } from 'react'

export class UncontrolledForm extends Component {

    constructor(props) {
      super(props)

      this.inputName = React.createRef();
      this.inputCategory = React.createRef();
      this.inputComments = React.createRef();
    }

    

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComments.current.value)
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your name:</label>
                        <input
                            ref={this.inputName}
                            // use if want field to be prefilled with something
                            // defaultValue="John Smith"
                            id="id-name"
                            name="name"
                            type="text" 
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select
                            ref={this.inputCategory}
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
                            ref={this.inputComments}
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

export default UncontrolledForm