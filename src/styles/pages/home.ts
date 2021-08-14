import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
  background: linear-gradient(180deg, #7a57fd 0%, #6135d7 100%);
  box-shadow: 4px 2px 14px rgba(0, 0, 0, 0.05);

  position: relative;
`;

export const Background = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 0;
  background: url('/images/head-shape.png') no-repeat;
  background-position: 120% 15%;

  @media (max-width: 1070px) {
    display: none;
  }
`;

export const ContentPage = styled.div`
  width: 100%;
  max-width: 1140px;

  padding: 0 2.4rem 12.6rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  > div {
    height: 100%;
    position: relative;

    margin-top: 13rem;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    > section {
      align-content: flex-end;
    }
  }

  @media (max-width: 782px) {
    padding-bottom: 0;

    > div {
      flex-direction: column-reverse;
      gap: 6rem;
    }
  }
`;

export const ContentPageContainerImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: -172px;
  z-index: 2;

  > img {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 70%;
  }

  @media (max-width: 915px) {
    position: static;
    width: 100%;
  }
`;

export const Header = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4rem;

  > div {
    display: flex;
    align-items: center;
    gap: 8rem;

    > div {
      display: flex;
      align-items: center;
      gap: 1.8rem;
    }

    nav ul {
      @media (max-width: 600px) {
        display: none;
      }

      list-style: none;
      display: flex;
      align-items: center;
      gap: 4.7rem;

      li {
        a {
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`;

export const HamburguerButton = styled.button`
  border: 0;
  background: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const HeaderButton = styled.button`
  width: 16.5rem;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background: #ffd74f;
  box-shadow: 1px 3px 11px -3px rgba(255, 231, 150, 0.45);
  border-radius: 0.4rem;

  letter-spacing: -0.02em;
  font-weight: bold;
  color: #6f48ec;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContentSection = styled(motion.section)`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > div {
    width: 60rem;

    > h1 {
      font-size: 4.8rem;
      font-weight: 400;

      span {
        text-transform: uppercase;
        color: #ffeaa4;
        font-weight: 700;
      }
    }

    > p {
      display: inline-block;
      width: 49.6rem;
      margin-top: 6rem;
      font-size: 1.6rem;
      line-height: 191.68%;
    }
  }

  @media (max-width: 915px) {
    gap: 2.4rem;

    > div {
      width: 100%;

      > p {
        width: 100%;
      }
    }
  }

  @media (max-width: 360px) {
    > div p {
      display: none;
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 6rem;

  > input {
    margin-bottom: 3rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 915px) {
    > div {
      flex-direction: column;

      > button {
        width: 100%;
        margin-top: 1.6rem;
      }
    }
  }
`;

export const Input = styled.input`
  flex: 1;

  background: #7955e8;
  border: 1px solid #a68eef;
  border-radius: 4px;

  padding: 1.2rem 2.8rem;

  &::placeholder {
    font-size: 1.6rem;
    line-height: 191.68%;

    color: #fff;
  }
`;

export const SubmitButton = styled.button`
  text-transform: uppercase;
  box-shadow: none;

  width: 20.9rem;
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background: #ffd74f;
  border-radius: 0.4rem;

  letter-spacing: -0.02em;
  font-weight: bold;
  color: #6f48ec;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

type MobileMenuProps = {
  open?: boolean;
};

export const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  z-index: 5;
  background: #200e64;
  width: 100%;
  height: 100vh;
  display: none;

  > header {
    height: 10rem;
    padding: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      border: 0;
      background: none;
    }
  }

  > div {
    height: calc(100% - 10rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ${props =>
    props.open &&
    css`
      display: flex;
      flex-direction: column;

      > div {
        margin: 0 2.4rem;

        ul {
          list-style: none;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 1.6rem;

          li a {
            font-size: 2.1rem;
            font-weight: 400;
          }
        }

        nav {
          margin-bottom: 6rem;
        }

        button {
          display: block;
          width: 100%;
        }
      }
    `}
`;

export const ModalSignIn = styled.div`
  padding: 4rem;

  > h1 {
    font-size: 3.8rem;
    font-weight: 400;

    span {
      text-transform: uppercase;
      color: #ffeaa4;
      font-weight: 700;
    }
  }
`;

export const FormSignIn = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 4.8rem;

  > button {
    align-self: flex-end;
    text-transform: uppercase;
    box-shadow: none;

    width: 20.9rem;
    height: 5.6rem;

    margin-top: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    background: #ffd74f;
    border-radius: 0.4rem;

    letter-spacing: -0.02em;
    font-weight: bold;
    color: #6f48ec;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
