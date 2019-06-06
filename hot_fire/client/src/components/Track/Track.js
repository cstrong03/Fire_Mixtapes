import React from 'react'

const Track = ({track}) =>{


  return(
    <div>
      <h1>{track.song_title}</h1>
      <h4>{track.artist}</h4>
      <img src={track.album}
      alt="album cover"
      />
    </div>
  )
}

export default Track;
