1. 虚拟 DOM 机制

   1. state 数据
   2. JSX 模板
   3. 数据 + 模板 结合，生成虚拟 DOM(一个 JS 对象，用来描述真实 DOM)

      ```javascript
      [
         'div',
         {id: 'abc'},
         children:[
            'span',
            {},
            children: [
               'text',
               {},
               'hello world'
            ]
         ]
      ]
      ```

   4. 用虚拟 DOM 的结构生成真实的 DOM 元素显示在页面

      `<div id="abc"><span>hello world</span></div>`

   5. state 发生变化 hello react
   6. 数据 + 模板 生成新的 虚拟 DOM
      ```javascript
      [
         'div',
         {id: 'abc'},
         children:[
            'span',
            {},
            children: [
               'text',
               {},
               'hello react'
            ]
         ]
      ]
      ```
   7. 比较原始虚拟 DOM 和新的虚拟 DOM 区别，找出变化的内容 hello world => hello react (diff 操作是 react 中的重点)
   8. 直接操作 DOM 只改变 `span` 中的 hello world
   9. jsx > createElement > 虚拟 DOM > 真实 DOM
   10. 优点：
       1. 性能得到提升
       2. 跨端应用 RN

2. 生命周期
   1. init ： constructor
   2. mounting
      1. componentWillMount
      2. render
      3. componentDidMount
   3. update ： props 或者 state 发生变化
      1. shouldComponentUpdate 组件更新之前自动执行
      2. componentWillUpdate render 之前 shouldComponentUpdate 之后执行
      3. componentDidUpdate render 之后
      4. componentWillRecieveProps 组件接受了父组件的 props ，只要父组件 render 被重新执行就子组件就执行这个函数
   4. componentWillUnmount 清理副作用
3. 关于 redux-thunk
   1. 加了 redux-thunk 的 middleware 之后, action 可以 return 一个函数,这个函数的参数是 store 的 dispatch 方法
   2. 由于使用 redux-thunk 对 store.dispath 做了增强，所以会调用这个函数类型的 action
   3. 所以可以在此处增加异步操作
4. applyMiddleware: middleware 就是对 dispath 方法的一个增强，最初的 dispath 方法只能接受一个对象 action
   1. 如果传入的是一个函数，那就执行这个函数
5. redux-saga 的简单使用
6. react-redux
