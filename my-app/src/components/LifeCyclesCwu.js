import React, { Component } from 'react'
import LifeCyclesCWUTracker from './LifeCyclesCWUTracker'

export class LifeCyclesCWU extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
        }
    }

    toggleDisplay = () => {
        // sets visible property equal to the opposite of the previous state
        // state calculated based on its previous value
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    render() {
        return (
            <div>
                {this.state.visible && <LifeCyclesCWUTracker />}
                <button onClick={this.toggleDisplay}>Toggle Display</button>
            </div>
        )
    }
}

export default LifeCyclesCWU