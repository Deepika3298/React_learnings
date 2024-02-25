import React, { Component } from 'react'

class Column extends Component {
  render() {
    const items=[
    {
        id:1,
        title:'Deepika'
    }
    ]
    return (
        // <React.Fragment>
        //     <td>Name</td>
        //     <td>Deepika</td>
        // </React.Fragment>

        // Shorthand syntax
        <>
        <td>Name</td>
        <td>Deepika</td>
        </>
        // <React.Fragment>
        //     {
        //         items.map(item => (
        //                 <React.Fragment key={item.id}>
        //                     <td><h1>Title</h1></td>
        //                     <td><p>{item.title}</p></td>
        //                 </React.Fragment>
        //         ))
        //     }
        // </React.Fragment>
    )
  }
}

export default Column
