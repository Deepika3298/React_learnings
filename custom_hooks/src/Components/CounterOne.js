import React from 'react'
import useCounter from '../Hooks/useCounter'

function CounterOne() {
    const [count,increment,decrement,reset]= useCounter(0,5)
  return (
    <div>
      <h2>Count- {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset </button>
    </div>
  )
}

export default CounterOne
