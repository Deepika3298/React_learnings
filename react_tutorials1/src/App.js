import logo from './logo.svg';
import './App.css';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import Purecmp from './Components/Purecmp';
import ParentComp from './Components/ParentComp';
import RefDemo from './Components/RefDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';

function App() {
  return (
    <div className="App">
      {/* <LifeCycleA />  */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <ParentComp/> */}
      {/* <RefDemo /> */}
      {/* <FocusInput /> */}
      <FRParentInput />
    </div>
  );
}

export default App;
