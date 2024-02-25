import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super()
        this.state={
          message:'Hello'
        }
        // Approach -3
        // this.eventHandler= this.eventHandler.bind(this)
    }
    // Binding of event handldrs occur due to this keyword because it return undefined
    eventHandler(){
        // this.setState({
        //     message:'GoodBye!'
        // })
        console.log(this)
    }

    //Approach-4
    // eventHandler= ()=>{
    //   this.setState({
    //     message:'Goodbye!'
    //   })
    // }
    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Approach 1 -bind event handler in render method */}
        <button onClick={this.eventHandler.bind(this)}>Click</button>
        {/* Approach 2 - Use arrow function*/}
        {/* <button onClick={()=>this.eventHandler()}>Click</button> */}
        {/* Approach 3- Binding Event handler in constructor */}
        {/* <button onClick={this.eventHandler}>Click</button> */}
        {/* approach 4- Using Arrow function as class property */}
        {/* <button onClick={this.eventHandler}>Click</button> */}
      </div>
    )
  }
}

export default EventBind
