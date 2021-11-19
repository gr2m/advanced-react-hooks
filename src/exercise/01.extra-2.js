// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.extra-1.js

import * as React from 'react'

function countReducer(state, newState) {
  return {
    ...state,
    count: newState.count,
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state
  const increment = () => setState({count: state.count + step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
