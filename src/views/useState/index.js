import React, { useState } from 'react'

function UseState (props) {
  const [count, setCount] = useState(() => {
    return props.count || 0
  })
  const [person, setPerson] = useState({name: '张三', age: 20})

  function handleCount () {
    setCount(count => {
      return count + 1
    })
    // setCount 是异步的
    document.title = count
  }

  return (
    <div>
      <span>{count} {person.name} {person.age}</span>
      <button onClick={handleCount}>+ 1</button>
      <button onClick={() => setPerson({...person, name: '李四'})}>setPerson</button>
    </div>
  )
}

export default UseState;
