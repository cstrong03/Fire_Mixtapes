import React from 'react'
import { Link } from 'react-router-dom'

const Track =({track, setCurrentTrack})=>{
  return(
    <div>
      <Link to={`/tracks/${track.id}`}
      onClick={()=> setCurrentTrack(track)}>
      <h1>{track.song_title}</h1>
      </Link>
    </div>
  )
}

export default Track
