import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { createTrack } from '../../services/ApiHelper'

class CreateTrack extends Component {
  constructor(props){
    super(props);
    this.state = {
      track: [],
      created: false
    }
  }

  onTrackForm = (event) => {
    const element = event.target
    const title = element.title
    const value = element.value

    this.setState({[title]: value})
  }

  onTrackFormSubmit = async (event) => {
    event.preventDefault()
    console.log(`form submitted`);

    let newTrack = {
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.artist
    }

    const track = await createTrack(newTrack)

    this.setstate({
      track:track,
      created:true
    })
    if (this.setState.created === true) {
      return <Redirect to='/' />
    }
  }
  render(){
    return(
      <div>
        <form>
          <div>
            <label htmlFor="name">Track Name</label>
            <input
            id="name"
            type="text"
            name="name"
            onChange=''
            placeholder="song title"/>
          </div>
          <div>
            <label htmlFor="name">Artist</label>
            <input
            id="name"
            type="text"
            name="name"
            onChange=''
            placeholder="Artist Name"/>
          </div>
          <div>
            <label htmlFor="name">Album</label>
            <input
            id="name"
            type="file"
            name="name"
            onChange=''
              />
          </div>
            <div>
              <button type="submit">Upload Track </button>
            </div>
          </form>

      </div>
    )
  }
}

export default CreateTrack
