import React, { Component } from 'react'

export class Demo extends Component {
  constructor (props) {
    // call super if you want access of 'this'
    // pass props to super if you want use this.props in constructor or else not needed
    super()
    this.state = { count: 0 }
    // this.incrementCount = this.incrementCount.bind(this)
    // explicitly binding this to the functions or call by arrow function in render
  }

  incrementCount () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <div>
        <button onClick={e => this.incrementCount(e)}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default Demo
