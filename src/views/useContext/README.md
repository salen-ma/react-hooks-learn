# useContext

简化跨组件层级获取数据

1. 通过 createContext 方法创建上下文对象
2. 使用上下文对象的 Provider 组件注入数据
3. 在底层组件内使用 useContext(上下文对象) 获取注入的数据