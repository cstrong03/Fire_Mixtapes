import React from 'react'
import Track from '../Track/Track'

const TrackList = (props)=>{
  const data = props.tracks && props.tracks.map((track, index)=>
    <Track key={track.id} track={track}
    setCurrentTrack={props.setCurrentTrack} trackIndex={index} />
  )

  return(
    <div>{data}</div>
  )
}

export default TrackList
