import Axios from 'axios';

const KEY = 'AIzaSyCzTjqLQvi0-i_q-FspimsZnLpR5xXDvwQ';

const api = Axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/', 
  params: {
    part: 'snippet',
    maxResults: 5,
    topicId: 'podcast',
    key: KEY
  }
})

export default api;