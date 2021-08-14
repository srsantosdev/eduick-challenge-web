import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  background: #fff;

  position: relative;

  padding: 1.2rem 1.2rem 2.2rem;

  box-shadow: 0px 32px 60px rgba(84, 95, 122, 0.08);
  border-radius: 0.4rem;

  cursor: pointer;

  > img {
    width: 100%;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1.4rem;
    margin-bottom: 1.6rem;

    span {
      display: block;
      background: rgba(207, 201, 233, 0.4);
      font-weight: 600;
      font-size: 1rem;
      line-height: 160%;

      letter-spacing: -0.01em;
      text-transform: uppercase;

      color: #000000;
      opacity: 0.8;
      padding: 0.8rem 1.2rem;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 160%;
    color: #200e64;
  }

  &:before {
    transition: all 0.2s;
  }

  &:hover {
    &:before {
      content: '';
      width: 50%;
      height: 2px;
      background: #7a57fd;

      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
