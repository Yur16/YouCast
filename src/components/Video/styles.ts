import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  width: 250px;
  height: 250px;

  .image-container {
    
  > img {
    width: 100%;
    height: 50%;
    }

  }

  .details {
    margin-top: 8px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 16px;
  font-family: Mulish, sans-serif;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 4px;

  /* number of lines */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const PublishedOn = styled.span`
  margin-top: 10px;
  font-size: 13px;
  font-family: Mulish, sans-serif;
  color: rgba(255, 255, 255, .5);

  > strong {
    color: rgba(255, 255, 255, 0.8);
  }
`;