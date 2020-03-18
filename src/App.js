import React from 'react'
import './App.css'
import DemoHooks from './components/DemoHooks'
import MouseContainer from './components/MouseContainer'
import PreviousState from './components/PreviousState'
import Demo from './components/Demo'
function App () {
  return (
    <div className='App'>
      <Demo />
      <DemoHooks />
      <PreviousState />
      <MouseContainer />
    </div>
  )
}

export default App
