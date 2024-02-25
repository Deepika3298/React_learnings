import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    
    logMousePosition=e=>{
        this.setState({x: e.clientX, y: e.clientY})
    }

    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePosition)
    }
    // use to stop the logMousePosition function to write co-ordinateswhen component will unmount.
    componentWillUnmount(){
        window.removeEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
        <div>
           X- {this.state.x} Y- {this.state.y} 
        </div>
        )
    }
}

export default ClassMouse
