import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>I am {person.name}. I am {person.age} years old. I have a skill of {person.skill}.</h2>
    </div>
  )
}

export default Person
