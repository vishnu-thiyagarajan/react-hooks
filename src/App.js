import React from 'react'
import './App.css'
import DemoHooks from './components/DemoHooks'
import MouseContainer from './components/MouseContainer'
import PreviousState from './components/PreviousState'
import Demo from './components/Demo'
import GrandParent from './components/GrandParent'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App () {
  return (
    <div className='App'>
      <Demo />
      <DemoHooks />
      <PreviousState />
      <MouseContainer />
      <UserContext.Provider value='props from app.js'>
        <ChannelContext.Provider value='channel value'>
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider><br />
      <CounterOne /><br />
      <CounterTwo />
    </div>
  )
}

export default App
