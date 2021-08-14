import styled from 'styled-components';

export const Container = styled.div`
  > label {
    line-height: 191.68%;
    font-weight: normal;
  }

  & + div {
    margin-top: 1.6rem;
  }
`;

export const Field = styled.div`
  background: rgba(255, 255, 255, 0.24);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 0.4rem;

  height: 5.6rem;

  display: flex;
  align-items: center;

  padding: 0 1.8rem;

  > input {
    background: transparent;
    flex: 1;
    border: 0;
  }
`;

export const IconContainer = styled.button`
  border: 0;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;
