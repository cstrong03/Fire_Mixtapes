import React from 'react'
import UpdateTrack from '../UpdateTrack/UpdateTrack'
import { deleteTrack } from '../../services/ApiHelper'
import { Button } from 'semantic-ui-react'
import Sound from '../../Assets/Sound.js'

const Trackpage = ({track, currentTrack, trackIndex, toggleEdit}) =>{

  const page = currentTrack.isEditable
  ? <UpdateTrack currentTrack={currentTrack} trackIndex={trackIndex}/>
  : <div classname="current">
      <h2 className="song">{currentTrack.song_title}</h2>
      <h4 className="song">{currentTrack.artist}</h4>
      <Button className="song" onClick={(e)=> toggleEdit(e, trackIndex)}>Edit</Button>
      <img className="song image" src={currentTrack.album} alt="artwork"/>
      <Button className="song" onClick={()=> deleteATrack()}>Delete</Button>
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
