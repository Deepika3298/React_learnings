import React, { Component } from 'react'

class HoverCounter extends Component {
    
    render() {
        const {count, incrementCounter}= this.props
        return (
        <h1 onMouseOver={incrementCounter}>Hover {count} times</h1>
        )
    }
}

export default HoverCounter
