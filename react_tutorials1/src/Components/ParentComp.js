import React, { Component } from 'react'
import Purecmp from './Purecmp';
import RegCmp from './RegCmp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Deepika'
      }
    }
    componentDidMount(){
        setInterval(() => {
         this.setState({
            name:'Deepika'
         })
        }, 2000);
    }
    
    
    render() {
        console.log('Parent Component render')
        return (
        <div>
           Parent Component
           {/* <RegCmp name={this.state.name}/>
           <Purecmp name={this.state.name}/>  */}
           <MemoComp name={this.state.name}/>
        </div>
        )
    }
}

export default ParentComp


//Pure Component console.log statement is not working