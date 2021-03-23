# useReducer

为函数型组件保存状态，使用方式类似于 redux

1. 第一个参数是 reducer 函数，用来处理状态；第二个参数是状态的初始值
2. 返回值为数组，数组存储状态值和 dispatch 方法，dispatch 用于触发 action 来改变状态
3. 可以通过将 dispatch 方法传给子组件的方式，在子组件内改变父组件的状态