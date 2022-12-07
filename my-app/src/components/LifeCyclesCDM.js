import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {

    constructor(props) {
        console.log('constructor called')
      super(props)
    
      this.state = {
         data: 'loading'
      }
    }

    // simulates getting data with API fetch
    getData() {
        console.log('getData called')
        setTimeout(() => {
            console.log('Data fetched')
            this.setState({
                data: 'loaded'
            })
        }, 3000)
    }

    // when the component is mounted, the getData method will be called
    // and 3 seconds later the state will be updated and the data is loaded
    componentDidMount() {
        console.log('Component mounted')
        this.getData()
    }

    render() {
        console.log('Render method called')
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM