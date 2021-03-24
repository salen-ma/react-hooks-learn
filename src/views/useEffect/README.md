# useEffect

用来在函数组件中执行副作用操作

- useEffect 执行时机

可以把 useEfffect 看做 compontDidMount，compontDidUpdate，compontDidWillUnmount 三个函数的组合

`useEffect(()=>{})`          =>  compontDidMount，compontDidUpdate
`useEffect(()=>{}, [])`      =>  compontDidMount
`useEffect(()=>()=>{})`      =>  compontDidWillUnmount

- useEffect 解决的问题

1. 可以按照用途将代码分类（将一组相干的业务逻辑归置到同一个 useEffect 函数中）
2. 可以简化重复代码，使组件内部代码更清晰

- useEffect 第二个参数是个数组，可以传入一系列变量，表示只在这些变量变化时触发 effect
- useEffect 内不能直接使用 async 函数，需要包装一层，因为 useEffect 返回的函数用于做清理用，使用 async 后返回值会变成 Promise 类型