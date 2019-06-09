import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { updateTrack } from '../../services/ApiHelper'

class UpdateTrack extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentTrack: {},
      updated: false
    }
  }

  handleTrackChange = async(event)=>{
    event.preventDefault()

    const element = event.target
    const title = element.name
    const value = element.value

    this.setState({[title]: value})
  }

  handleTrackSubmit = async(event)=>{
    event.preventDefault()

    const updatedTrack = {
      song_title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
    }

    const track = await updateTrack(this.props.currentTrack.id, updatedTrack)

    this.setState({
      currentTrack: track,
      updated: true
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleTrackSubmit}>
          <div>
            <label htmlFor="name">Track Name</label>
            <input
            id="name"
            type="text"
            name="title"
            value={this.props.currentTrack.title}
            onChange={this.handleTrackChange}
            placeholder="song title"/>
            </div>
          <div>
            <label htmlFor="name">Artist</label>
            <input
            id="name"
            type="text"
            name="artist"
            onChange={this.handleTrackChange}
            placeholder="artist"/>
            </div>
          <div>
            <label htmlFor="name">Album</label>
            <input
            id="name"
            type="text"
            name="album"
            onChange={this.handleTrackChange}
            placeholder="Insert Album ArtWork"/>
            </div>
            <div>
              <button type="submit">Add Changes</button>
            </div>
          </form>
      </div>
    )
  }
}
export default UpdateTrack
