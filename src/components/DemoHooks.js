import React, { useState } from 'react'

const DemoHooks = () => {
  // only call hooks at top level not in loops, nested functions or conditions
  // only call hooks from react functions not in any js regular functions
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default DemoHooks
