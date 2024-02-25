import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX]= useState(0)
    const [y, setY]= useState(0)

    const logMousePosition= e =>{
        console.log('logMousePosition Method')
        setX(e.clientX)
        setY(e.clientY)
    }
    //A function which is passed to useEffect will return a function which will executed when component will unmount. So whatever it returns is basically a cleanup function.
    useEffect(()=>{
        console.log('Component Move')
        window.addEventListener('mousemove', logMousePosition)

        return ()=>{
            console.log('Component unmount')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    return (
        <div>
            Hooks- X-{x} Y-{y}
        </div>
    )
}

export default HookMouse
