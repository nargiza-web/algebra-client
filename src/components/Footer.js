import React from 'react'
import {NavLink} from 'react-router-dom'
function Footer() {
  return (
    <div className = "container center">
      <h5>powered by NAKU <NavLink to="https://naku.dev">https://naku.dev </NavLink></h5>
    </div>
  )
}

export default Footer