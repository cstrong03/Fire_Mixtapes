import React, { Component }from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import TracksList from './components/TracksList/TracksList'
import TrackPage from './components/TrackPage/TrackPage'
import CreateTrack from './components/CreateTrack/CreateTrack'
import { fetchTracks } from './services/ApiHelper'

class App extends Component {

  constructor(){
    super();
    this.state = {
      tracks: null,
      apiDataLoaded: false,
      currentTrack: {}
    }
  }

  getTrackData = async () =>{
    const tracks = await fetchTracks();
    this.setState({
      tracks: tracks,
      apiDataLoaded: true
    })
  }

  componentDidMount = ()=>{
    this.getTrackData();
  }

  setCurrentTrack = (track) =>{
    this.setState({
      currentTrack: track
    })
  }

  render(){
    console.log(this.state)

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact path = '/'
            render={()=> <TracksList tracks={this.state.tracks}
                                      setCurrentTrack={this.setCurrentTrack}/>}
          />
          <Route
            path = '/tracks/:id'
            render={()=> <TrackPage tracks={this.state.tracks}
                                    setCurrentTrack={this.setCurrentTrack}
                                    currentTrack={this.state.currentTrack}/>}
          />

          <Route path='/create-track'
                 component={CreateTrack} />
        </Switch>
      </div>
    );
  }
}

export default App;
