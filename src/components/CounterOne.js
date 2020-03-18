import React, { useReducer } from 'react'

const initialState = 0
const reducer = (currentState, action) => {
  const actionMap = {
    increment: currentState + 1,
    decrement: currentState - 1,
    reset: initialState
  }
  return action in actionMap ? actionMap[action] : currentState
}
function CounterOne () {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterOne
