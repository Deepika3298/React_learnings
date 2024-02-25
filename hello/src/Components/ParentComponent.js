import React, { Component } from 'react'
import AnComp from './AnComp'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        parentName:'Parent'
      }
      this.greetParent= this.greetParent.bind(this)
    }

    greetParent(ChildName){
        // alert(`Hello ${this.state.parentName}`)
        // Recieved Parameter from child
        alert(`Hello ${this.state.parentName} from ${ChildName}`)
    }
     
  render() {
    return (
      <div>
        {/* greet handler pass as props */}
        <AnComp greetHandler={this.greetParent}/> 
      </div>
    )
  }
}

export default ParentComponent
