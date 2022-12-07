import React from 'react'

class Clock extends React.Component {

  // 1. 
  // The first time the component is rendered (webpage loads) the constructor is called
  // and sets everything up.
  // Takes care of creating a new date object in the state  
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    console.log('constructor')
  }
  // 3.
  // After the render method has executed, the component is considered mounted
  // Executes every time the component is mounted (not when it's updated)
  // Sets up a timer that exectues this.tick() every 1 second
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log('componentDidMount')
  }
  // 4.
  // Every time the tick method executes, the component's state is updated using the
  // setState method to reflect the new date
  // At this point, the component has new information in the state so must rerender
  // So, the render method is called again
  // Then, this method is called
  // the constructor or componentDidMount() will only be called again if something explicitly 
  // unmounts the component
  // e.g. refreshing the whole page, clicking a show/hide button, or a parent component rerendering
  // which removes it from the DOM and remounts it
  componentDidUpdate() {
    // console.log('componentDidUpdate')
  }
  // 5. 
  // If the component does need to be removed and replaced, this method is called just before
  // the component is unmounted, which allows you to execute any cleanup functions that
  // are required
  // e.g. removing event listeners, resetting intervals, stopping timers, cancelling active
  // network requests
  // In this case, it clears the timer so it doesn't keep trying to call the tick method
  // and update a component which no longer exists
  // If the component needs to be remounted, the cycle begins again from the constructor
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('componentWillUnmount')
  }
  tick() {
    this.setState({
      date: new Date()
    });
    // console.log('tick!')
  }

  // 2.
  // Render method is called - returns the JSX
  render() {
    console.log('render')
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock