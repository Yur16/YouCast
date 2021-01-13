import styled from 'styled-components';

export const Container = styled.div`

  width: 300px;
  height: 300px;

  .image-container {
  position: relative;

  > img {
    width: 100%;
    height: 50%;
  }

  }

  .details {
    margin-top: 8px;

    .separator {
      color: rgba(255, 255, 255, .5);
      font-weight: bold;
      margin: 0 5px;
    }
  }
`;

export const Duration = styled.div`
  padding: 0 8px;
  position: absolute;
  bottom: 10px;
  right: 5px;

  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  > span {
    color: #fff;
  }
`;
export const Title = styled.h2`
  color: #fff;
  font-size: 16px;
  font-family: Mulish, sans-serif;
  font-weight: bold;
  margin-bottom: 4px;
`;
export const ViewCount = styled.span`
  margin-top: 8px;
  font-size: 13px;
  font-family: Mulish, sans-serif;
  color: rgba(255, 255, 255, .5);
`;
export const PublishedOn = styled.span`
  margin-top: 10px;
  font-size: 13px;
  font-family: Mulish, sans-serif;
  color: rgba(255, 255, 255, .5);
`;
