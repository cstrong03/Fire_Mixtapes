import React, { Component }from 'react';
import './App.css';
import { Router, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import TracksList from './components/TracksList/TracksList'
import { fetchTracks } from './services/ApiHelper'

class App extends Component {

  constructor(){
    super();
    this.state = {
      tracks: null,
      apiDataLoaded: false
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

  render(){
    console.log(this.state)

    return (
      <div className="App">
        <Header />
        <Switch></Switch>
        <TracksList tracks={this.state.tracks}/>
      </div>
    );
  }
}

export default App;
