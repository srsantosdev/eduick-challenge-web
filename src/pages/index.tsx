import { useCallback, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ThemeProvider } from 'styled-components';

import CheckboxGroup from '../components/CheckboxGroup';
import Modal from '../components/Modal';
import InputField from '../components/InputField';

import { landingTheme } from '../styles/themes/landing';
import { GlobalStyle } from '../styles/GlobalStyle';

import {
  ContainerPage,
  ContentPage,
  Header,
  HeaderButton,
  ContentSection,
  Form,
  Input,
  SubmitButton,
  ContentPageContainerImage,
  Background,
  HamburguerButton,
  MobileMenu,
  ModalSignIn,
  FormSignIn,
} from '../styles/pages/home';
import {
  variantsHeader,
  variantsLeft,
  variantsRight,
} from '../styles/animations/home';

export default function Home(): JSX.Element {
  const router = useRouter();

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);

  const toggleOpenMobileMenu = useCallback(() => {
    setIsOpenMobileMenu(state => !state);
  }, []);

  const toggleOpenSignInModal = useCallback(() => {
    setIsOpenSignInModal(state => !state);
  }, []);

  return (
    <ThemeProvider theme={landingTheme}>
      <ContainerPage data-testid="home-page">
        <Head>
          <title>Eduick | Find your best teacher</title>
        </Head>

        <MobileMenu open={isOpenMobileMenu} data-testid="mobile-menu">
          <header>
            <img src="/logo.svg" alt="Eduick" />

            <button type="button" onClick={toggleOpenMobileMenu}>
              <img src="/close.svg" alt="Close" />
            </button>
          </header>

          <div>
            <nav>
              <ul>
                <li>
                  <a href="/">How it works</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
              </ul>
            </nav>

            <HeaderButton
              onClick={toggleOpenSignInModal}
              data-testid="button-open-modal-signin"
            >
              Get started
            </HeaderButton>
          </div>
        </MobileMenu>

        <Modal isOpen={isOpenSignInModal} setIsOpen={toggleOpenSignInModal}>
          <ModalSignIn data-testid="modal-signin">
            <h1>
              Get started
              <br />
              <span>Just Login</span>
            </h1>

            <FormSignIn>
              <InputField name="username" label="Username" />
              <InputField name="password" label="Password" type="password" />

              <button type="button" onClick={() => router.push('/dashboard')}>
                Login
              </button>
            </FormSignIn>
          </ModalSignIn>
        </Modal>

        <Background />

        <ContentPage>
          <Header
            variants={variantsHeader}
            initial="unMounted"
            animate="mounted"
          >
            <div>
              <div>
                <HamburguerButton
                  onClick={toggleOpenMobileMenu}
                  data-testid="hamburguer-button"
                >
                  <img src="/hamburger.svg" alt="Menu" />
                </HamburguerButton>

                <img src="/logo.svg" alt="Eduick" />
              </div>

              <nav>
                <ul>
                  <li>
                    <a href="/">How it works</a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                </ul>
              </nav>
            </div>

            <HeaderButton onClick={toggleOpenSignInModal}>
              Get started
            </HeaderButton>
          </Header>

          <div>
            <ContentPageContainerImage
              variants={variantsLeft}
              initial="unMounted"
              animate="mounted"
            >
              <img src="/head-shape-image.png" alt="Find your best teacher" />
            </ContentPageContainerImage>

            <ContentSection
              variants={variantsRight}
              initial="unMounted"
              animate="mounted"
            >
              <div>
                <h1>
                  Find your
                  <br />
                  <span>Best Teacher</span>
                </h1>

                <p>
                  Whether you are a student trying to find your ideal private
                  language teachers/tutors or a teacher trying to find great
                  students for your customised private lessons!
                </p>

                <Form>
                  <Input placeholder="Type here what are you looking for" />

                  <div>
                    <CheckboxGroup />
                    <SubmitButton>Search</SubmitButton>
                  </div>
                </Form>
              </div>
            </ContentSection>
          </div>
        </ContentPage>
      </ContainerPage>

      <GlobalStyle />
    </ThemeProvider>
  );
}
