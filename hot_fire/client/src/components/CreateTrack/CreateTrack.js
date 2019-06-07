import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { createTrack } from '../../services/ApiHelper'

class CreateTrack extends Component {
  constructor(props){
    super(props);
    this.state = {
      track: [],
      created: false,
      user_id: 1
    }
  }

  onTrackFormChange = (event) => {
    const element = event.target
    const title = element.name
    const value = element.value

    this.setState({[title]: value})
  }

  onTrackFormSubmit = async (event) => {
    event.preventDefault()
    console.log(`form submitted`);

    let newTrack = {
      song_title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      user_id: this.state.user_id
    }

    const track = await createTrack(newTrack)

    this.setState({
      track:track,
      created:true
    })
    if (this.setState.created === true) {
      return <Redirect to='/tracks' />
    }
  }
  render(){
    return(
      <div>
        <form onSubmit = {this.onTrackFormSubmit}>
          <div>
            <label htmlFor="name">Track Name</label>
            <input
            id="name"
            type="text"
            name="title"
            onChange={this.onTrackFormChange}
            placeholder="song title"/>
          </div>
          <div>
            <label htmlFor="name">Artist</label>
            <input
            id="name"
            type="text"
            name="artist"
            onChange={this.onTrackFormChange}
            placeholder="Artist Name"/>
          </div>
          <div>
            <label htmlFor="name">Album</label>
            <input
            id="name"
            type="text"
            name="album"
            onChange={this.onTrackFormChange}
              placeholder="img url"/>
          </div>
          <div>
            <label htmlFor="name">Insert Song</label>
            <input
            id="name"
            type="file" accept=".mp3 .mp4"
            name="album"
            onChange={this.onTrackFormChange}
              placeholder="img url"/>
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
