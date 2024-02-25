// State
import React, { Component} from "react";

class Message extends Component{
    // class constructor
    constructor(){
        super() //This is required because we extends component class and call has to be made to base class constructor.
        // State object
        this.state={
           message: 'Welcome Visitor' 
        }
    }

     changeMessage(){
        this.setState({
            message :  'Thank you for Subscribing'
        })
    } 
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1> 
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>  
        ) 
    }
}

export default Message;