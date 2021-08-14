import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BlobLoader } from 'react-loaders-kit';

import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { GlobalStyle } from '../styles/GlobalStyle';
import { dashboardTheme } from '../styles/themes/dashboard';

import Card from '../components/Card';
import Pagination from '../components/Pagination';
import MobileMenu from '../components/MobileMenu';

import { api } from '../services/api';

import {
  Banner,
  BannerContent,
  ButtonChangeMode,
  CardsGrid,
  ContainerBannerImage,
  ContainerLoading,
  ContainerPage,
  ContainerPagination,
  ContentPage,
  Footer,
  Header,
  HeaderBackground,
  HeaderContent,
  MobileMenuButton,
  ProfileArea,
} from '../styles/pages/dashboard';
import {
  variantsBanner,
  variantsGridCards,
} from '../styles/animations/dashboard';

type Course = {
  id: number;
  title: string;
  stars: 1 | 2 | 3 | 4 | 5;
  lessons: number;
  image: string;
};

const Dashboard: React.FC = () => {
  const perPage = 6;

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState<Course[]>([]);
  const [paginatedCourses, setPaginatedCourses] = useState<Course[]>([]);

  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);

  const toogleIsOpenMenuMobile = useCallback(() => {
    setIsOpenMenuMobile(state => !state);
  }, []);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get('/courses');

        setCourses(response.data);
      } catch {
        toast.error('There was an error loading the course list.');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    const startPaginate = (Number(currentPage) - 1) * perPage;

    const endPaginate = startPaginate + perPage;

    setPaginatedCourses(courses.slice(startPaginate, endPaginate));
  }, [courses, perPage, currentPage]);

  return (
    <ThemeProvider theme={dashboardTheme}>
      <ContainerPage data-testid="dashboard-page">
        <Head>
          <title>Eduick | Dashboard</title>
        </Head>

        <ContentPage>
          <Header>
            <HeaderBackground />
            <MobileMenu
              data-testid="mobile-menu-component"
              isOpen={isOpenMenuMobile}
            />

            <HeaderContent>
              <div>
                <img src="/logo.svg" alt="Eduick" />

                <nav>
                  <a href="/">My Classes</a>
                </nav>
              </div>

              <div>
                <ButtonChangeMode>Change to teacher mode</ButtonChangeMode>

                <MobileMenuButton
                  onClick={toogleIsOpenMenuMobile}
                  data-testid="mobile-menu-button"
                >
                  {isOpenMenuMobile ? (
                    <img src="/chevron_up.svg" alt="Open" />
                  ) : (
                    <img src="/chevron_down.svg" alt="Close" />
                  )}
                </MobileMenuButton>
                <ProfileArea>
                  <img src="https://github.com/srsantosdev.png" alt="Profile" />
                </ProfileArea>
              </div>
            </HeaderContent>
          </Header>

          <Banner
            variants={variantsBanner}
            initial="unMounted"
            animate="mounted"
          >
            <BannerContent>
              <ContainerBannerImage>
                <img src="/shape-banner.svg" alt="Hello Student." />
              </ContainerBannerImage>

              <div>
                <div>
                  <h2>
                    Hello <strong>Student</strong>
                    <span>.</span>
                  </h2>
                  <p>
                    Whether you are a student trying to find your ideal private
                    language teachers/tutors
                  </p>
                </div>

                <img
                  className="image-banner"
                  src="/illustration-banner.svg"
                  alt="Hello Student."
                />
              </div>
            </BannerContent>
          </Banner>

          {loading ? (
            <ContainerLoading>
              <BlobLoader loading={loading} />
            </ContainerLoading>
          ) : (
            <CardsGrid>
              <motion.div
                variants={variantsGridCards}
                initial="hidden"
                animate="visible"
              >
                {paginatedCourses.map(course => (
                  <Card key={course.id} course={course} />
                ))}
              </motion.div>
            </CardsGrid>
          )}

          <ContainerPagination>
            <Pagination
              perPage={perPage}
              total={courses.length}
              onChangePage={page => setCurrentPage(page)}
            />
          </ContainerPagination>

          <Footer>
            <div>
              <p>
                Copyright © 2021 <strong>Eduick</strong>. Todos os direitos
                reservados.
              </p>
            </div>
          </Footer>
        </ContentPage>
      </ContainerPage>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Dashboard;
