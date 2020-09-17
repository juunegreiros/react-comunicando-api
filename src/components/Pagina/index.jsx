import React from 'react';
import { PageWrapper, Main } from './style';
import EstiloBase from '../../settings/theme';
import Footer from './Footer';
import Header from './Header';

const Page = ({ children }) => (
  <PageWrapper>
    <EstiloBase />

    <Header />

    <Main>{children}</Main>

    <Footer />
  </PageWrapper>
);

export default Page;
