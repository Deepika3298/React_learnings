//Event handling in funational component

import React from 'react'

function FunctionClick() {

     function clickFunction(){
        console.log('Button Clicked');
    }
  return (
    <div>
      <button onClick={clickFunction}>Click</button>
    </div>
  )
}

export default FunctionClick
