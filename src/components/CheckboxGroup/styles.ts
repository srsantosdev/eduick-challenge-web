import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  width: 100%;

  @media (max-width: 320px) {
    flex-direction: column;

    > button {
      width: 100%;
    }
  }
`;
