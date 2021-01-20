import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

import Video from '../../components/Video';
import api from '../../services/api';


import { Container, FullEpisodes, Cuts, ShimmerVideo } from './styles';

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
  title: string;
}

function Home() {
  const [podcasts, setPodcasts ] = useState<Podcast[]>([]);
  const [cuts, setCuts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Load full episodes
    async function getFullEpisodes() {
      const { data } = await api.get('search', {
        params: {
          q: 'podcast completo',
          maxResults: 4,
        }
      })
      setPodcasts(data.items);
    }
    getFullEpisodes();

    // Load cuts
    async function getCuts() {
      const { data } = await api.get('search', {
        params: {
          q: 'cortes de podcast',
          videoDuration: 'medium',
          maxResults: 20,
        }
      })
      setCuts(data.items);
    } 
    getCuts();

    setLoading(false);
  }, [])

  return (
    <Container>

      <FullEpisodes>
        <h1>Podcasts completos</h1>

        <div className='content'>
          {loading ? (
            <ShimmerEffect />
          ) : (
            <>
              {podcasts.map(podcast => (
                <Video
                  id={podcast.id.videoId}
                  key={podcast.id.videoId}
                  imageURL={podcast.snippet.thumbnails.medium.url} 
                  title={podcast.snippet.title}
                  publishedOn={podcast.snippet.publishedAt}
                  ChannelName={podcast.snippet.channelTitle}
                />
              ))}
            </> 
          )}
          
        </div>
      </FullEpisodes>

      <Cuts>
        <h1>Cortes de Podcasts</h1>

        <div className='content'>
          {loading ? (
            <ShimmerEffect />
          ) : (
            <>
              {cuts.map(cut => (
                <Video
                  id={cut.id.videoId}
                  key={cut.id.videoId}
                  imageURL={cut.snippet.thumbnails.medium.url} 
                  title={cut.snippet.title}
                  publishedOn={cut.snippet.publishedAt}
                  ChannelName={cut.snippet.channelTitle}
                />
              ))}
            </>
          )}
          
        </div>

      </Cuts>
    </Container>
  );
}

const ShimmerEffect = () => (
  <>
    <ShimmerVideo >
      <div className='image' />
      <div className='title'/>
      <div className='published-at' /> 
    </ShimmerVideo>

    <ShimmerVideo >
      <div className='image' />
      <div className='title'/>
      <div className='published-at' /> 
    </ShimmerVideo>
    
    <ShimmerVideo >
      <div className='image' />
      <div className='title'/>
      <div className='published-at' /> 
    </ShimmerVideo>

    <ShimmerVideo >
      <div className='image' />
      <div className='title'/>
      <div className='published-at' /> 
    </ShimmerVideo>
  </>   
);

export default Home;
