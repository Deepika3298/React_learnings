import React from 'react'

function AnComp(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        {/* PAssing parameter from child to parent method -Using arrow function */}
        <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default AnComp
