import axios from 'axios'

const URL = 'http://localhost:4567';

const api = axios.create({
  baseURL: `${URL}/tracks`
})

export const fetchTracks = async()=>{
  try {
    const resp = await api.get('/')
    return resp.data
  } catch (e) {
    console.log(e);
  }
}
export const getTrack = async(id)=>{
  try {
    const resp = await api.get(`/${id}`)
    return resp.data
  } catch (e) {
    console.log(e);
  }
}
export const createTrack = async(data)=>{
  try {
    const resp = await api.post(`/`, data)
    return resp.data
  } catch (e) {
    console.log(e);
  }
}
export const updateTrack = async(id, data)=>{
  try {
    const resp = await api.put(`/${id}`, data)
    return resp.data.tracks
  } catch (e) {
    console.log(e);
  }
}
export const deleteTrack = async(id)=>{
  try {
    const resp = await api.delete(`/${id}`)
    return resp
  } catch (e) {
    console.log(e);
  }
}
