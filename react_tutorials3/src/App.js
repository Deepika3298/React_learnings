import logo from './logo.svg';
import './App.css';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value='Deepika'>
         <ComponentC/>
      </UserProvider> */}
      {/* For default value */}
        <ComponentC/>
      
    </div>
  );
}

export default App;
