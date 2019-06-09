import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
  render(){
    return(
      <div>
        <nav>
          <Link to={'/tracks'}>Home</Link>
          <Link to={'/create-track'}>Upload</Link>
        </nav>
      </div>
    )
  }
}

export default Header
