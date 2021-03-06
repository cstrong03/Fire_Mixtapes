import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/About/About'
import TrackList from './components/TrackList/TrackList'
import TrackPage from './components/TrackPage/TrackPage'
import CreateTrack from './components/CreateTrack/CreateTrack'
import UpdateTrack from './components/UpdateTrack/UpdateTrack'
import { fetchTracks } from './services/ApiHelper'


class App extends Component{

  constructor(){
    super()
    this.state = {
      tracks: null,
      apiDataLoded: false,
      currentTrack: {}
    }
  }

  getTrackData = async () => {
    const tracks = await fetchTracks();
    tracks.forEach(track => {
      track.isEditable = false
    })

    await this.setState({
      tracks: tracks,
      apiDataLoded: true
    })
  }

  componentDidMount = () =>{
    this.getTrackData()
  }

  toggleEdit = async (e, index) => {
    let { currentTrack } = this.state
    currentTrack.isEditable = !currentTrack.isEditable

    await this.setState({
      currentTrack
    })
  }
  setCurrentTrack = (track) =>{
    this.setState({
      currentTrack: track
    })
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/tracks'
                 render={()=> <TrackList tracks={this.state.tracks}
                                         setCurrentTrack={this.setCurrentTrack} />}
                                         />

          <Route path='/about'
                 component={About} />

          <Route path='/tracks/:id'
                 render={(m)=> <TrackPage tracks={this.state.tracks}
                                          setCurrentTrack={this.setCurrentTrack}
                                          currentTrack={this.state.currentTrack}
                                          toggleEdit={this.toggleEdit}
                                          m={m} />}
                                          />
          <Route path='/create-track'
                 component={CreateTrack}/>


          <Route path='/update-track/:id'
                  render={()=> <UpdateTrack tracks={this.state.tracks}
                                            currentTrack={this.state.currentTrack} />}
                                            />
        </Switch>
      </div>
    );
  }

}

export default App;
