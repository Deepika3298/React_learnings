import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    //For props
    let className= props.primary ? 'primary' : ''
     
    return (
        // <div>
        //   <h2 className='primary'>Stylesheets</h2>
        // </div>


        //Using props
        // <div>
        //     <h2 className={className}>Stylesheets</h2>
        // </div>

        //When we want to use more than one class, we use template literals. Alternate to template literals we can also use className library. 
        <div>
        <h2 className={`${className} font-xl`}>Stylesheets</h2>
        </div>
    
    )
}

export default Stylesheet
