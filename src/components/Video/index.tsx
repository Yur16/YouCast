import React from 'react';

import { Container, Duration, Title, PublishedOn } from './styles';

interface VideoProps {
  title: String;
  publishedOn: String;
  imageURL: String;
  ChannelName: String;
}

const Video: React.FC<VideoProps> = ({ imageURL, title, publishedOn, ChannelName}) => {
  return (
    <Container>
      <div className='image-container'>
        <img
          src={`${imageURL}`}
        />
        <Duration>
          <span>1:07:34</span>
        </Duration>
      </div>
      

      <div className='details'>
        <Title>{title}</Title>
        <PublishedOn>{publishedOn} por <strong>{ChannelName}</strong></PublishedOn>
      </div>

    </Container>
  );
};

export default Video;
