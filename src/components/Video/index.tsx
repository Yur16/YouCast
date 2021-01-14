import React from 'react';
import Format from '../../utils/formatDate';

import { Container, Duration, Title, PublishedOn } from './styles';

interface VideoProps {
  title: String;
  publishedOn: Date;
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
        <PublishedOn>{`há ${Format(publishedOn)}`} por <strong>{ChannelName}</strong></PublishedOn>
      </div>

    </Container>
  );
};

export default Video;
