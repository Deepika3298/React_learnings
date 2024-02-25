import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }

    increment(){
        // this.state.counter= this.state.counter +1 //Direct modification of state (not do because react will not re_render the state)
        // this.setState({ //setState(async function) has 2 parameters-state object and callback function
        //     counter:this.state.counter +1
        // }, ()=>{
        //     console.log('CallBack Value is' , this.state.counter)
        // })

         //for multiple calls(we use prevState here not current state to get desired result)
        
         this.setState(prevState=>({
            counter: prevState.counter+1
         }) )        
        console.log( this.state.counter)

         //You can pass props object as 2nd parameter to this function, if your state is dependent on props as well.
        //  this.setState((prevState,props)=>({
        //     counter: prevState.counter+props.addVAlue//(addVAlue is taken as example)
        //  }) )

    }
    //console.log() prints value in console less than rendered value because call to setState is asynchronous. console.log called before the state is actually set.
    //In many applications, we want to execute code only after state is updated, in that case we pass callback function as 2nd parameter to setState.
    
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    //React make  group multiple setState call to single update for better performance. In our case all setState calls are done in one go and 
    //update simultaneously and updated value does not carry over between different calls. So, when we have to update state on the basis of previous state, 
    //we have to pass function as argument to setState method instead of object.  
  render() {
    return (
    <div>
    <div>Count- {this.state.counter}</div>
    <button onClick={()=>this.incrementFive()}>Increment</button>
    </div> 
    )
       
  }
}

export default Counter
