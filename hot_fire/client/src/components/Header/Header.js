import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
  render(){
    return(
      <div>
        <nav className="Nav">
          <Link className="babyNav" to={'/tracks'}>Home</Link>
          <Link className="babyNav" to={'/about'}>About</Link>
          <Link className="babyNav" to={'/create-track'}>Upload</Link>
        </nav>
      </div>
    )
  }
}

export default Header
