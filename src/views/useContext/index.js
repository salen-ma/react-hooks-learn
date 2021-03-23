import React, { createContext, useContext } from 'react'
const countContext = createContext()

function ParentContext () {
  return <countContext.Provider value={100}>
    <UseContext />
  </countContext.Provider>
}

function UseContext () {
  const count = useContext(countContext)

  return (
    <div>
      <span>{count}</span>
    </div>
  )
}

export default ParentContext