import axios from 'axios'

const URL = "http://localhost:4567";

const api = axios.create({
  baseURL: `${URL}/tracks`
});

export const fetchTracks = async()=>{
  try {
    const resp = await api.get('/')
    return resp.data;
  } catch (e) {
    console.log(e);
  }
}
