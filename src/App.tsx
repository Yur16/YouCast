import React, { useEffect, useState } from 'react';
import Video from './components/Video';
import api from './services/api';
import { Container } from './styles';
import GlobalStyle from './styles/global';

interface Podcast {
  etag: String;
  id: {
    kind: String;
    videoId: String;
  };
  snippet: Snippet; 
}

interface Snippet {
  channelId: String;
  channelTitle: String;
  description: String;
  liveBroadcastContent: String;
  publishTime: String;
  publishedAt: String;
  thumbnails: { 
    default: {
      height: Number;
      url: String;
      width: String;
    }, 
    medium: {
      height: Number;
      url: String;
      width: String;
    }, 
    high: {
      height: Number;
      url: String;
      width: String;
    } 
  };
  title: String;
}

function App() {
  const [podcasts, setPodcasts ] = useState<Podcast[]>([]);

  useEffect(() => {
    api.get('search', {
      params: {
        q: 'xandao flow'
      }
    }).then(Response => {
      const { data } = Response;
      setPodcasts(data.items);
      console.log(podcasts[0]);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <Container>
      <h1>Recomendado para você</h1>

      {podcasts.map(podcast => (
        <Video
          imageURL={podcast.snippet.thumbnails.medium.url} 
          title={podcast.snippet.title}
          publishedOn={podcast.snippet.publishedAt}
          ChannelName={podcast.snippet.channelTitle}
        />
      ))}
      <GlobalStyle />
    </Container>
  );
}

export default App;
