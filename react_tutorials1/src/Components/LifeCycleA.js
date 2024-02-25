 import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
 
 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Deepika'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log('LifeCycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('LifeCycleA getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
      console.log('LifeCycleA componentDidUpdate')
    }
    
    changeState=()=>{
        this.setState({
          name: 'Deepika Vohra'
        })
    }

    render() {
          console.log('LifeCycleA render')
          return (
              <div>
                  <div>LifeCycleA</div>
                  {/* FOR UPDATE LIFECYCLE */}
                  <button onClick={this.changeState}>Change State</button>
                  <LifeCycleB/>
              </div>
            
              
          )
    }
 }
 
 export default LifeCycleA
 