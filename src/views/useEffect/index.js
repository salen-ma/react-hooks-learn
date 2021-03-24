import React, { useState, useEffect } from 'react'

function UseEffect (props) {
  const [count, setCount] = useState(() => {
    return props.count || 0
  })
  const [person, setPerson] = useState({name: '张三', age: 20})

  useEffect(() => {
    console.log('组件更新时执行')
  })

  useEffect(() => {
    console.log('组件挂载完成时执行一次')
  }, [])

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count => {
        return count + 1
      })
    }, 1000)
    return () => {
      console.log('组件卸载')
      clearInterval(timerId)
    }
  })

  useEffect(() => {
    console.log('person 更新')
    document.title = person.name
  }, [person])

  useEffect(() => {
    (async () => {
      const res = await getData()
      console.log(res, 'res')
    })()
  }, [person])

  function handleCount () {
    setCount(count => {
      return count + 1
    })
  }

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleCount}>+ 1</button>
      <button onClick={() => setPerson({...person, name: '李四'})}>setPerson</button>
    </div>
  )
}

function getData () {
  return new Promise((resolve, reject) => {
    resolve({
      data: 'hello'
    })
  })
}

export default UseEffect;
