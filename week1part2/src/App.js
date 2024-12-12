import React, { Component } from 'react'

import StateAndPropExam from './StateAndPropExam'

export default class App extends Component {

    
  state = {name: "Ford is a company of cars!!!"}

  render() {
    return (
      <div>
        <StateAndPropExam name ={this.state.name}/>
      </div>
    )
  }
}
