//List Rendering
import React from 'react'
import Person from './Person'

function NameList() {
    // const names=['Bruce','Clark','Diana']
    // const namesList= names.map(name=><h2>{name}</h2>)
    // return (
    //     <div>{namesList}</div>
    // )


    //Index as Key
    const names=['Bruce','Clark','Diana']
    const namesList= names.map((name,index)=><h2 key={index}>{index}{name}</h2>)
    return (
        <div>{namesList}</div>
    )


    // const persons=[
    //     {
    //         id: 1,
    //         name:'Bruce',
    //         age: 28,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name:'Clark',
    //         age: 30,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name:'Diana',
    //         age: 35,
    //         skill: 'Vue'
    //     }
    // ]
    // // const personsList= persons.map(person=><h2>I am {person.name}. I am {person.age} years old. I have a skill of {person.skill}.</h2>)

    // //Refactor into different component named as person.js
    // const personsList= persons.map(person=><Person key={person.id} person={person}/>)
    // return <div>{personsList}</div>
}

export default NameList
