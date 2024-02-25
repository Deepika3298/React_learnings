import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef= React.createRef(); //this.inputRef is property.
      //2nd approach
      this.cbref= null
      this.setCbRef= (element)=>{
        this.cbref= element
      }
    }

    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbref){
            this.cbref.focus() // we don't need current here unlike 1st approach.
        }
    }

    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
        
    render() {
        return (
        <div>
            {/* <input type='text'ref={this.inputRef}/> */}
            <input type='text'ref={this.setCbRef}/>
            {/* <button onClick={this.clickHandler}>Click</button> */}
        </div>
        )
    }
}

export default RefDemo
