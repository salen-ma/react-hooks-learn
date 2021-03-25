import React, { useState, useMemo } from 'react'

function UseMemo () {
  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(true)
  const doubleCount = useMemo(() => {
    console.log('run useMemo')
    return count * 2
  }, [count])

  function handleCount () {
    setCount(count => {
      return count + 1
    })
  }

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleCount}>+ 1</button>
      <button onClick={() => setBool(!bool)}>setBool {bool ? '为真' : '为假'}</button>
      <span>{doubleCount}</span>
    </div>
  )
}

export default UseMemo;
