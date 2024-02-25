import logo from './logo.svg';
import './App.css';
import React from 'react'
import ComponentC from './Components/ComponentC'
import CounterUsingUseReducer from './Components/CounterUsingUseReducer';
import CounterUsingUseReducer2 from './Components/CounterUsingUseReducer2';
import CountersUsingMultipleUseReducers from './Components/CountersUsingMultipleUseReducers';

export const UserContext= React.createContext()
export const ChannelContext= React.createContext()

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'Deepika'}>
          <ChannelContext.Provider value={'WebDEv'}>
              <ComponentC/>
          </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterUsingUseReducer/> */}
      {/* <CounterUsingUseReducer2/> */}
      <CountersUsingMultipleUseReducers/>
    </div>
  );
}

export default App;
