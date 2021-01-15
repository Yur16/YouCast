import React from 'react';
import { Link } from 'react-router-dom';
import Format from '../../utils/formatDate';

import { Container, Title, PublishedOn } from './styles';

interface VideoProps {
  title: String;
  publishedOn: Date;
  imageURL: String;
  ChannelName: String;
}

const Video: React.FC<VideoProps> = ({ imageURL, title, publishedOn, ChannelName}) => {


  return (
    <Link to='watch' style={{ textDecoration: 'none' }}>
      <Container>
        <div className='image-container'>
          <img
            src={`${imageURL}`}
          />
        </div>
        

        <div className='details'>
          <Title>{title}</Title>
          <PublishedOn>
            {`há ${Format(publishedOn)}`} por <strong>{ChannelName}</strong>
          </PublishedOn>
        </div>

      </Container>
    </Link>
  );
};

export default Video;
