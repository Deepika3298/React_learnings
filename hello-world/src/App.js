import logo from './logo.svg';
import './App.css';
//import { Greet } from './Components/Greet'; //For named exxport statement.
import Greet from './Components/Greet'; //when we use default keyword with export statement in component file then use this here. 
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'

function App() {
  return (
    // <div className="App">
    //   {/* {/* <Greet/>
    //   {/* <Hello/> */}
    //   <Greet name="Bruce" heroName="Batman"> 
    //     <p>This is a children property.</p>
    //   </Greet>
    //   <Greet name="Clark" heroName="Superman">
    //     <button>Action</button>
    //   </Greet>
    //   <Greet name="Diana" heroName="Wonder Woman"/>
    //   class component
    //   <Welcome name="Bruce" heroName="Batman">
    //     <p>This is a children property</p>   Doubt??
    //   </Welcome> 
    //   <Welcome name="Clark" heroName="Superman"/> 
    //   <Welcome name="Diana" heroName="Wonder Woman"/>   
    // </div>
    <div className="App">
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
    </div>
  );
}

//State description
// function App(){
//   return(
//   <div className="App">
//     {/* <Message/> */}
//     <Counter/>
//    </div>
//   );
// }

export default App;
// Known properties can be passed as attribute(name and heroname) and unknown properties or dynamic html components are passed in between components tags(p tag).