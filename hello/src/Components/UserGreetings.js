import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true 
      }
    }
    
  render() {
        //If/Else
        // if(this.state.isLoggedIn)
        //   return <div> Welcome Deepika </div>
        // else
        //   return <div> Welcome Guest </div>

        //ELEMENT VARIABLE
        // let message
        // if(this.state.isLoggedIn)
        //     message= <div>Welcome Deepika</div>
        // else
        //     message= <div>Welcome Guest</div>
        // return <div>{message}</div>    

        // Ternary conditional operators
        // return(
        //     this.state.isLoggedIn ? <div>Welcome Deepika</div> : <div>Welcome Guest</div>
        // )

        // Short circuit operator
        return this.state.isLoggedIn && <div>Welcome Deepika</div>
  }
}

export default UserGreetings
