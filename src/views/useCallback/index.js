import React, { useState, memo, useCallback } from 'react'

function Memo () {
  const [count, setCount] = useState(0)

  function handleCount () {
    setCount(count => {
      return count + 1
    })
  }

  function resetCount () {
    setCount(0)
  }

  const callBackResetCount = useCallback(() => setCount(0), [setCount])

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleCount}>+ 1</button>
      <MemoFoo resetCount={resetCount} type="1" />
      <MemoFoo resetCount={callBackResetCount} type="2"/>
    </div>
  )
}


var MemoFoo = memo(function Foo (props) {
  console.log(`MemoFoo 组件${props.type}渲染`)
  return <div>
    MemoFoo 组件 {props.type}
    <button onClick={props.resetCount}>resetCount</button>
  </div>
})

export default Memo;
