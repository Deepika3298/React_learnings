import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {/* this.props.name has reference to function here */}
        {this.props.render(true)} 
      </div>
    )
  }
}

export default User
