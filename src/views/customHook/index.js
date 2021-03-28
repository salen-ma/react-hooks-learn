import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useGetPost () {
  const [post, setPost] = useState({})
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        setPost(res.data)
      })  
  }, [])
  return [post, setPost]
}

function useUpdateInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  function onChange (event) {
    setValue(event.target.value)
  }

  return {value, onChange}
}

function CustomHook () {
  const [post, setPost] = useGetPost({})
  const usernameInput = useUpdateInput('')
  const passwordInput = useUpdateInput('')

  function submit (event) {
    event.preventDefault()
    console.log(usernameInput.value, passwordInput.value)
  }

  return <div>
    <div>
      <h3>{post.title}</h3>
      <article>{post.body}</article>
    </div>
    <hr />
    <form>
      <div>username: <input type="text" name="username" {...usernameInput} /></div>
      <div>password: <input type="password" name="password" {...passwordInput} /></div>
      <div><button type="submit" onClick={submit}>提交</button></div>
    </form>
  </div>
}

export default CustomHook