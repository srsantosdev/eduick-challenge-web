import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

type PageItemProps = {
  active?: boolean;
};

export const PageItem = styled.button<PageItemProps>`
  width: 1.4rem;
  height: 1.4rem;

  border: 0;
  border-radius: 50%;

  background: #7a57fd;
  font-size: 1rem;

  transition: filter 0.2s;

  ${props =>
    props.active &&
    css`
      width: 1.6rem;
      height: 1.6rem;
      font-size: 1.2rem;
    `}

  &:hover {
    filter: brightness(0.9);
  }
`;
