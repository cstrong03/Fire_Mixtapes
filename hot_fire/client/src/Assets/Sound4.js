import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import soundfile4 from './Hotline.mp3'

class Sound extends Component{
  constructor(props) {
  super(props);
  this.state = {
    play: false,
    pause: true,
  }
  this.audio = new Audio(soundfile4);
}

play = () => {
  console.log('i was click')
this.setState({ play: true, pause: false })
  this.audio.play();
}

pause = () => {
this.setState({ play: false, pause: true })
  this.audio.pause();
}

render() {

return (
  <div>
    <Button onClick={this.play}>Play</Button>
    <Button onClick={this.pause}>Pause</Button>
  </div>
    );
  }
}
export default Sound
