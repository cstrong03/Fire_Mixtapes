import React from 'react'

import Track from '../Track/Track'

const TracksList = (props) => {

  console.log(props)
  
  const data = props.tracks && props.tracks.map(track =>
    <Track key={track.id} track={track} setCurrentTrack={props.setCurrentTrack} />
  )

  return(
    <div>{data}</div>

  )
}

export default TracksList
