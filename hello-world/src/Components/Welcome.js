// CLASS COMPONENT

import React, { Component} from "react";

// class Welcome extends Component{
//     render(){
//         // Use of props
//         // this.props.name='Vishvas'- shows error because props are immutable.
//         return(
//             <div>
//                 <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//                 {/* {this.props.children} Doubt?? */}
//             </div>
            
//         ) 

//     }
// }



//Destructuring Props in Class component
class Welcome extends Component{
    render(){
        const {name,heroName}= this.props;
        //TO DESTRUCT STATE - const{state1,state2}= this.state
        return(
            <div>
                <h1>Welcome {name} a.k.a {heroName}</h1>
            </div>  
        ) 
    }
}

export default Welcome;