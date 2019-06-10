import React from 'react'
import { Link } from 'react-router-dom'

const Track =({track, setCurrentTrack})=>{
  return(
    <div className="track">
      <Link to={`/tracks/${track.id}`}
      onClick={()=> setCurrentTrack(track)}>
      <img className="trackDisplay" src={track.album} alt="cover art"/>
      <h1 className="trackDisplay">{track.song_title}</h1>
      </Link>
    </div>
  )
}

export default Track
