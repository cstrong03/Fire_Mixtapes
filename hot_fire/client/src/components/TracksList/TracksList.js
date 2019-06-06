import React from 'react'

import Track from '../Track/Track'

const TracksList = ({tracks}) =>{

  const data = tracks && tracks.map(track => {
    return <Track key={track.id} track={track} />
  })

  return(
    <div>{data}</div>
  )
}

export default TracksList
