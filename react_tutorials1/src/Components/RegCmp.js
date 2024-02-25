import React, { Component } from 'react'

class RegCmp extends Component {
  render() {
    console.log('Regular component render')
    return (
      <div>
        Regular Component  {this.props.name}
      </div>
    )
  }
}

export default RegCmp
