import styled from 'styled-components';

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