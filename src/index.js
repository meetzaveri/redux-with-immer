import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')


const render = () => ReactDOM.render(
  <>
  {/** Acts as example of redux-immer approach */}
  <Counter
    value={store.getState().counter}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />

    {/** Acts as example of in-component-immer approach */}
  <TodoList />
  </>,
  rootEl
)

render()
store.subscribe(render)
