import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount]= useState(0)

    const tick= ()=>{
        // setCount(count+1)
        setCount(prevCount=>prevCount+1)
    }

    // function doSomething(){
    //     console.log(someprops)
    // } not define here

    useEffect(()=>{
        // function doSomething(){
        //     console.log(someprops)
        // }
        // doSomething()
        const interval = setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    },[]) //[someprops]
    //
    //to update the counter after every second,(1st way) rather then passing an empty dependency we have to pass count as dependency.
    //When we want to specify empty dependency list make sure there is not any.
    //(2nd way)- We can use second form of setCount-prevCount with that there is no need to pass count in dependency array.
  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHookCounter
