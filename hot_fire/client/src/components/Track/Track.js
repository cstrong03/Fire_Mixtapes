import React from 'react'
import { Link } from 'react-router-dom'

const Track =({track, setCurrentTrack})=>{
  return(
    <div className="all">
      <Link to={`/tracks/${track.id}`}
      onClick={()=> setCurrentTrack(track)}>
      <img className="display" src={track.album} alt="cover art"/>
      <h1 className="display">{track.song_title}</h1>
      </Link>
    </div>
  )
}

export default Track
