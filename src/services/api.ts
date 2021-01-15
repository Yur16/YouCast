import Axios from 'axios';

const KEY = 'AIzaSyBHDIrChp-Vn14_D2KNkTEsnBB9W0VWwFY';

const api = Axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/', 
  params: {
    part: 'snippet',
    key: KEY,
    type: 'video',
    relevanceLanguage: 'pt-br'
  }
})

export default api;