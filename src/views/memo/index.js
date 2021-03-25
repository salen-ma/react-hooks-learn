import React, { useState, memo } from 'react'

function Memo () {
  const [count, setCount] = useState(0)

  function handleCount () {
    setCount(count => {
      return count + 1
    })
  }

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleCount}>+ 1</button>
      <Foo />
      <MemoFoo />
    </div>
  )
}

// 未使用 memo 优化的组件会在父组件渲染时重新渲染
function Foo () {
  console.log('Foo 组件渲染')
  return <div>Foo 组件</div>
}

var MemoFoo = memo(function Foo () {
  console.log('MemoFoo 组件渲染')
  return <div>MemoFoo 组件</div>
})

export default Memo;
