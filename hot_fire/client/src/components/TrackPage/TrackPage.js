import React from 'react'
// import { Link } from 'react-router-dom'

const TrackPage = ({currentTrack}) => {

  console.log(currentTrack)

  return(
    <div>
      <h2>{currentTrack.song_title}</h2>
      <h4>{currentTrack.artist}</h4>
      <img />
    </div>
  )
}

export default TrackPage;
