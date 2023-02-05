
import React, { Component } from 'react'
import loading from './Skateboarding.gif'
export default class LoadingBar extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='loading'></img>
      </div>
    )
  }
}
