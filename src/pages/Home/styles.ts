import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const FullEpisodes = styled.section`

  h1 {
    color: #fff;
    font-size: 22px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
  }
`;

export const Cuts = styled.section`
  > h1 {
    color: #fff;
    font-size: 22px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 10px;
  }
`;

const LoadEffect = keyframes`  
  from { opacity: .5; }
  to { opacity: 1; }
`;

export const ShimmerVideo = styled.div`
  width: 250px;
  height: 250px;


  //make a load animation
  animation-duration: 0.8s;
  animation-name: ${LoadEffect};
  animation-iteration-count: infinite;
  animation-direction: alternate;

  .image {
    width: 100%;
    height: 50%;
    background: rgba(255, 255, 255, 0.2);
  }

  .title {
    width: 80%;
    height: 15px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;

    margin-top: 10px;
  }

  .published-at {
    width: 60%;
    height: 15px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;

    margin-top: 10px;
  }
`;