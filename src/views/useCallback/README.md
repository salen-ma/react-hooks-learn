# useCallback()

- useCallback 方法用于进行性能优化，缓存函数，使组件在重新渲染时得到相同的函数实例
- useCallback 可以搭配 memo 方法使用，避免在将函数传递给下层组件时，父组件更新导致函数不一致，使得下层组件跟着更新
