import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { createTrack } from '../../services/ApiHelper'
import 'semantic-ui-css/semantic.min.css'
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

class CreateTrack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tracks: [],
      created: false,
      user_id: 2
    }
  }

  onTrackFormChange = (event)=>{
    const element = event.target
    const title = element.name
    const value = element.value

    this.setState({[title]: value})
  }

  onTrackFormSubmit = async(event)=>{
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
    if(this.setState.created === true){
      return <Redirect to='/tracks' />
    }
  }
  render(){
    return(
      <div className="formDetail">
        <Form onSubmit = {this.onTrackFormSubmit}>
          <div>
            <label className="formDetail" htmlFor="name">Track Name</label>
            <Form.Input
            id="name"
            type="text"
            name="title"
            onChange={this.onTrackFormChange}
            placeholder="song title"/>
          </div>
          <div>
            <label className="formDetail" htmlFor="name">Artist</label>
            <Form.Input
            id="name"
            type="text"
            name="artist"
            onChange={this.onTrackFormChange}
            placeholder="Artist name"/>
          </div>
          <div>
            <label className="formDetail" htmlFor="name">Album</label>
            <Form.Input
            id="name"
            type="text"
            name="album"
            onChange={this.onTrackFormChange}
            placeholder="Insert Album ArtWork" />
          </div>
          <div className="button1">
            <Button type="submit">Upload Track</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default CreateTrack
