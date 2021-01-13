import React from 'react';

import { Container, Duration, Title, ViewCount, PublishedOn } from './styles';

const Video: React.FC = () => {
  return (
    <Container>
      <div className='image-container'>
        <img
          src='https://i.ytimg.com/vi/lYNBpQgQzeo/maxresdefault.jpg'
        />
        <Duration>
          <span>1:07:34</span>
        </Duration>
      </div>
      

      <div className='details'>
        <Title>PRIMO RICO - Flow Podcst #165</Title>
        <ViewCount>1.074.649 visualizações</ViewCount> <span className='separator'>·</span> 
        <PublishedOn>Estreou em 22 de jul. de 2020</PublishedOn>
      </div>

    </Container>
  );
};

export default Video;
