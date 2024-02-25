import logo from './logo.svg';
import './App.css';
import HookCounter from './Component/HookCounter';
import HookCounterTwo from './Component/HookCounterTwo';
import HookCounterThree from './Component/HookCounterThree';
import HookCounterFour from './Component/HookCounterFour';
import HookCounterUsingUseEffect from './Component/HookCounterUsingUseEffect';
import ClassCounter from './Component/ClassCounter';
import ClassMouse from './Component/ClassMouse';
import HookMouse from './Component/HookMouse';
import MouseContainer from './Component/MouseContainer';
import IntervalClassCounter from './Component/IntervalClassCounter';
import IntervalHookCounter from './Component/IntervalHookCounter';
import DataFetching from './Component/DataFetching';
import DataFetchingId from './Component/DataFetchingId';
import DataFetchingButton from './Component/DataFetchingButton';

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterUsingUseEffect/> */}
      {/* <ClassCounter/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <DataFetchingId/> */}
      <DataFetchingButton/>
    </div>
  );
}

export default App;
