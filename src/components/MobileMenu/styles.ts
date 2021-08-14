import styled, { css } from 'styled-components';

type ContainerProps = {
  isOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 6.4rem;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;

  background: rgba(255, 255, 255, 0.9);

  display: none;

  ${props =>
    props.isOpen &&
    css`
      display: block;
    `}
`;

export const Button = styled.button`
  border: 0;
  background: #fff;

  box-shadow: 0px 32px 60px rgba(84, 95, 122, 0.08);

  width: 100%;
  height: 6rem;

  padding: 0 2.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: bold;
  color: #7a57fd;
`;
