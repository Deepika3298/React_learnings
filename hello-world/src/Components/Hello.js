import React from "react";

const Hello= ()=>{
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Senior Developer Deepika</h1>
    //     </div>
    // )//jsx format.

    //Without Jsx
    return React.createElement('div', 
    {id:'hello', className:'dummyClass'}, 
    React.createElement('h1', null, 'Hello Deepika'))
}

export default Hello;



//.create element is a tag in react library which takes three parameters 1. html tag as string
                                                                        // 2. additional property 3.children for html element
// Additional Property- it is an object with key-value pair that applied to an element.                                                                      