import React, { useEffect, useState } from 'react';
import Video from './components/Video';
import api from './services/api';
import { Container } from './styles';
import GlobalStyle from './styles/global';

interface Podcast {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet; 
}

interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: { 
    default: {
      height: number;
      url: string;
      width: number;
    }, 
    medium: {
      height: number;
      url: string;
      width: number;
    }, 
    high: {
      height: number;
      url: string;
      width: number;
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
          key={podcast.id.videoId}
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
