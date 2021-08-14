import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

type OverlayProps = {
  open: boolean;
};

export const Overlay = styled(motion.div)<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  z-index: 10;

  background: rgba(32, 14, 100, 0.8);

  display: none;

  ${props =>
    props.open &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export const Content = styled(motion.main)`
  width: 52.5rem;

  background: #6a40e4;
  border-radius: 0.4rem;

  position: relative;

  button.close-button {
    position: absolute;
    top: -20px;
    right: -20px;
    z-index: 12;

    width: 5rem;
    height: 5rem;
    border: 0;
    border-radius: 50%;
    background: #200e64;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;

    button.close-button {
      background: transparent;
      top: 30px;
      right: 20px;
    }
  }
`;
