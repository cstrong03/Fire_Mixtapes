import React, { Component } from 'react'
import Sound from '../../Assets/Sound'
import Sound2 from '../../Assets/Sound2'
import Sound3 from '../../Assets/Sound3'
import Sound4 from '../../Assets/Sound4'
import Sound5 from '../../Assets/Sound5'
import Sound6 from '../../Assets/Sound6'
import Sound7 from '../../Assets/Sound7'
import Sound8 from '../../Assets/Sound8'

class About extends Component {
  render(){
    return(
      <div className="progress">
        <h4>Beyonce</h4>
        <Sound />
        <h4>Nicki Minaj</h4>
        <Sound2 />
        <h4>Flume</h4>
        <Sound3 />
        <h4>Drake</h4>
        <Sound4 />
        <h4>Lil Nas X</h4>
        <Sound5 />
        <h4>Ariana Grande</h4>
        <Sound6 />
        <h4>Davido</h4>
        <Sound7 />
        <h4>Todrick Hall</h4>
        <Sound8 />
      </div>
    )
  }
}
export default About
