import React from 'react'
import {NavLink} from 'react-router-dom';
import '../App.css'

function First() {
  return (
    <div className="firstOuterContainer">
        <div className='firstInnerContainer'>
        <h2>Quiz App</h2>
        <NavLink to='/quiz'>Play</NavLink>
    </div>
    </div>

  )
}

export default First
