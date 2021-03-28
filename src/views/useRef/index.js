import React, { useState, useEffect, useRef } from 'react'

function UseRef () {
  const [count, setCount] = useState(0)
  const box = useRef()
  const timerId = useRef()

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      stopCount()
    }
  }, [])

  function stopCount () {
    clearInterval(timerId.current)
  }

  return <div ref={box}>
    <button onClick={() => {console.log(box)}}>获取 box</button>
    <span>{count}</span>
    <button onClick={stopCount}>停止</button>
  </div>
}

export default UseRef