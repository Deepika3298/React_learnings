import React from 'react';

//FUNCTIONAL COMPONENT

// function Greet(){
//     return <h1>Hello Deepika</h1>
// }
 //export const Greet= ()=> <h1>Hello Deepika</h1> //Named export statement.
//  const Greet= (props)=> {
//     console.log(props)
//     return(
//       <div>
//          <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//          {props.children}
//       </div>
//     ) 
//  }

//Destructing Props into functinalcomponents as function parameter
//1st way
//  const Greet= ({name,heroName})=> {
//     return(
//       <div>
//          <h1>Hello {name} a.k.a {heroName}</h1>
//          {/* {props.children} */}
//       </div>
//     ) 
//  }


//2nd way
 const Greet= (props)=> {
   const{name,heroName}=props;
   return(
     <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
        {/* {props.children} */}
     </div>
   ) 
}

export default Greet; 