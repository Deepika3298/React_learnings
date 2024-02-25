//Event handling in class component

import React, { Component } from 'react'

class ClassClick extends Component {
    ClassClick(){
        console.log('Button is clicked');
    }
  render() {
    return (
      <div>
        <button onClick={this.ClassClick}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
