import React from 'react'

// const UserContext= React.createContext()
// Setting Default value
const UserContext= React.createContext('React-Learnings')
const UserProvider= UserContext.Provider
const UserConsumer= UserContext.Consumer 

export {UserProvider, UserConsumer}
// For context type property
export default UserContext