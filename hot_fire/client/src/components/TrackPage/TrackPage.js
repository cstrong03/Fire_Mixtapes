import React from 'react'
import UpdateTrack from '../UpdateTrack/UpdateTrack'
import { deleteTrack } from '../../services/ApiHelper'

const Trackpage = ({track, currentTrack, trackIndex, toggleEdit}) =>{

  const page = currentTrack.isEditable
  ? <UpdateTrack currentTrack={currentTrack} trackIndex={trackIndex}/>
  : <div>
      <h2>{currentTrack.song_title}</h2>
      <h4>{currentTrack.artist}</h4>
      <img src={currentTrack.album} alt="artwork"/>
      <button onClick={(e)=> toggleEdit(e, trackIndex)}>Edit</button>
      <button onClick={()=> deleteATrack()}>Delete</button>
  </div>

  const deleteATrack = async() =>{
    await deleteTrack(currentTrack.id)
    document.location.reload()
  }
  return(
    <div>{page}</div>
  )
}
export default Trackpage
