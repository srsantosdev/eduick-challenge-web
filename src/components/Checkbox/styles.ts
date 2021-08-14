import styled, { css } from 'styled-components';

type ContainerType = {
  checked: boolean;
};

type CheckType = {
  checked: boolean;
};

export const Container = styled.button<ContainerType>`
  background: rgba(121, 85, 232, 0.3);
  border-radius: 0.4rem;
  border: 0;

  padding: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  > span {
    text-transform: uppercase;
    font-weight: bold;
    line-height: 191.68%;
  }

  ${props =>
    props.checked &&
    css`
      background: #7955e8;
      border: 1px solid #a68eef;
    `}

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 915px) {
    flex: 1;
  }
`;

export const Check = styled.div<CheckType>`
  width: 1.8rem;
  height: 1.8rem;

  background: #ffffff;
  opacity: 0.2;

  border-radius: 50%;
  margin-right: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.checked &&
    css`
      background: #ffd74f;
      opacity: 1;
    `}
`;
