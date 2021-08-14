import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContainerPage = styled.div`
  background: #f1f5f7;
  height: 100%;
`;

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 6.4rem;
  display: flex;
  align-items: center;

  background: #7a57fd;
  box-shadow: 4px 2px 14px rgba(0, 0, 0, 0.05);

  position: relative;
`;

export const HeaderBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
  background: url('/images/header-dashboard-background.svg') no-repeat;
  background-position: 8% center;

  @media (max-width: 560px) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1130px;
  margin: 0 auto;
  padding: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: 1;

  > div:first-child {
    display: flex;
    align-items: center;

    gap: 4.8rem;

    a {
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 2.8rem;
  }

  @media (max-width: 560px) {
    nav {
      display: none;
    }
  }
`;

export const ButtonChangeMode = styled.button`
  border: 0;
  background: rgba(32, 14, 100, 0.3);
  border-radius: 0.4rem;

  padding: 1.2rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  border: 0;
  background: none;

  display: none;

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProfileArea = styled.button`
  border: 0;
  background: transparent;

  position: relative;

  img {
    width: 3.4rem;
    height: 3.4rem;

    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    width: 0.9rem;
    height: 0.9rem;

    border-radius: 50%;
    background: #ffd74f;
  }
`;

export const Banner = styled(motion.section)`
  width: 100%;
  padding: 0 2.4rem;

  margin-top: 3rem;
`;

export const BannerContent = styled.div`
  width: 100%;
  max-width: 1130px;
  margin: 0 auto;
  padding: 3.2rem 2.4rem;

  background: #fff;

  position: relative;

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.4rem;

    padding: 0 11.8rem;
  }

  h2 {
    font-weight: normal;
    font-size: 2.1rem;
    line-height: 160%;
    color: #200e64;

    span {
      color: #ffd74f;
    }
  }

  p {
    font-size: 14px;
    line-height: 160%;
    color: #343434;

    display: inline-block;
    margin-top: 2.6rem;
  }

  img.image-banner {
    max-width: 28rem;
  }

  @media (max-width: 770px) {
    img.image-banner {
      display: none;
    }
  }

  @media (max-width: 575px) {
    > div:last-child {
      padding: 0 2.4rem;
    }
  }
`;

export const ContainerBannerImage = styled.div`
  position: absolute;
  top: 50%;
  left: -2%;
  z-index: 1;
  transform: translateY(-50%);

  @media (max-width: 1000px) {
    left: -4%;

    img {
      width: 70%;
    }
  }

  @media (max-width: 575px) {
    left: initial;
    right: -2%;
    top: 25%;
  }

  @media (max-width: 575px) {
    top: 15%;
    img {
      width: 50%;
    }
  }

  @media (max-width: 320px) {
    top: 10%;

    img {
      width: 40%;
    }
    right: -5%;
  }
`;

export const CardsGrid = styled(motion.main)`
  width: 100%;
  margin-top: 3rem;
  padding: 0 2.4rem;

  > div {
    width: 100%;
    max-width: 1130px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;

    @media (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 6rem;

  margin-top: 7.5rem;

  display: flex;
  align-items: center;

  background: #fff;
  color: #343434;

  position: relative;
  bottom: 0;
  left: 0;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 3.8rem;
`;

export const ContainerLoading = styled.main`
  height: 30rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
