import logo from './logo.svg';
import './App.css';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverHeading from './Components/HoverHeading';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounter from './Components/HoverCounter';
import User from './Components/User';
import Counter from './Components/Counter';
import ComponentC from './Components/ComponentC';



function App() {
  return (
    <div className="App">
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
        <Hero heroName='Superman' />
      </ErrorBoundary>  
      <ErrorBoundary>  
        <Hero heroName='Batman' />
      </ErrorBoundary>  
      <ErrorBoundary>  
        <Hero heroName='Joker' />
      </ErrorBoundary> */}
      {/* 
      <ClickCounter name='Deepika' />
      <HoverHeading /> */}

      {/* <ClickCounterTwo/>
      <HoverCounter/>
      <User render={(isLoggedIn)=> isLoggedIn?'Deepika' : 'Guest'}/> */}

      {/* <Counter render={(count, incrementCounter)=>
        <ClickCounterTwo count={count} incrementCounter={incrementCounter}/>
      }/> */}
      {/* <Counter render={(count, incrementCounter)=>(
        <HoverCounter count={count} incrementCounter={incrementCounter}/>
      )}/> */}

      {/* Anything passed between opening and closing tag is passed as children props. */}
      {/* <Counter>{(count, incrementCounter)=>
        <ClickCounterTwo count={count} incrementCounter={incrementCounter}/>
      }</Counter>
      <Counter>{(count, incrementCounter)=>
        <HoverCounter count={count} incrementCounter={incrementCounter}/>
      }</Counter> */}
    
      <ComponentC /> 
      
    </div>
  );
}

export default App;
