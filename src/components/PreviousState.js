import React, { useState, useEffect } from 'react'

const PreviousState = () => {
  // only call hooks at top level not in loops, nested functions or conditions
  // only call hooks from react functions not in any js regular functions
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [tick, setTick] = useState(0)

  const ticks = () => {
    setTick(tick + 1)
    // setTick(prevTick => prevTick + 1) // will also work instead of tick in useEffect dependency array
  }
  // if usestate is object destructure in and setstate
  // in class component state is always an object
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // setCount(count + 1) // will not work because setState is called in order to maintain the state
      setCount(prevCount => prevCount + 1)
    }
  }
  // when component renders call the function passed in useEffect
  // use multiple useEffect in case of not depended or un related code
  // define functions inside useEffect always that helps find the dependency values unlike ticks function
  useEffect(() => {
    document.title = `useEffect ${name} `
    const interval = setInterval(ticks, 1000)
    return () => {
      clearInterval(interval)
    }
    // document.title = `count is ${count}`
  }, [count, tick, name, ticks]) // useEffect is called only if dependency count ot tick changes
  // empty array passed will mimic componentdidmount from class componenents
  return (
    <div>
      {count}
      <button onClick={() => setCount(0)}>0</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={incrementFive}>+5</button><br />
      <input onChange={e=> setName(e.target.value)} /><br />
      {tick}
    </div>
  )
}

export default PreviousState
