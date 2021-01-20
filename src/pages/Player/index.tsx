import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

interface Params {
  id: string;
}

const Player: React.FC = () => {
  const { id } = useParams<Params>();

  return (
    <Container>
      <ReactPlayer className='video'
        url={`https://www.youtube.com/watch?v=${id}`}
        controls
        width={820}
        height={460}
      />
    </Container>
  );
};

export default Player;
