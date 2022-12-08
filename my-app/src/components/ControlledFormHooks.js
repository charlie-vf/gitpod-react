import React, {useState} from 'react'

function ControlledFormHooks() {
    // destructuring
    // useState hook takes the intial value of the desired state property as a parameter
    // returns the state property with its initial value set and a method to update it
    // name and setName could be anything, but it's convention for them to match each other, 
    // the update method to begin with set, and for them to match whatever you want to call
    // it in the state
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }

  return (
    <div>
        <h2>Please fill out the form below</h2>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="id-name">Your name:</label>
                  {/* We want this input's value to be the same as whatever the value of name
                        is in the state to give control to React */}
                  <input
                      value={name}
                      onChange={
                        (e) => setName(e.target.value)}
                      id="id-name"
                      name="name"
                      type="text"
                  />
              </div>
              <div>
                  <label htmlFor="id-category">Query category:</label>
                  <select
                      onChange={
                        (e) => setCategory(e.target.value)}
                      value={category}
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
                      onChange={
                        (e) => setComments(e.target.value)}
                      value={comments}
                      id="id-comments"
                      name="comments"
                  />
              </div>
              <input type="submit" value="Submit" />
          </form>
    </div>
  )
}

export default ControlledFormHooks