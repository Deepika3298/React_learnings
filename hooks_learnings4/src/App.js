import logo from './logo.svg';
import './App.css';
import DataFetchingUsingUseState from './Components/DataFetchingusingUseState';
import DataFetchingUsingUseReducer from './Components/DataFetchingUsingUseReducer';
import ParentComponent from './Components/ParentComponent';
import Counter from './Components/Counter';
import FocusInput from './Components/FocusInput';
import ClassTimer from './Components/ClassTimer';
import HookTimer from './Components/HookTimer';

function App() {
  return (
    <div className="App">
      {/* <DataFetchingUsingUseState/> */}
      {/* <DataFetchingUsingUseReducer/> */}
      {/* <ParentComponent/> */}
      {/* <Counter/> */}
      {/* <FocusInput/> */}
      <ClassTimer/>
      <HookTimer/>
    </div>
  );
}

export default App;
