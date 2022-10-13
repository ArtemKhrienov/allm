import React from 'react';

import AppIntroCard from '../../components/authentication/app-intro-card/app-intro-card.component';
import SignInForm from '../../components/forms/sign-in-form/sign-in-form.component';

import {
  Container,
  Background,
  AppIntroWrapper,
  SignInFormWrapper
} from './authentication.styles';

const Authentication = () => {
  return (
    <>
      <Background />
      <Container>
        <AppIntroWrapper>
          <AppIntroCard />
        </AppIntroWrapper>
        <SignInFormWrapper>
          <SignInForm />
        </SignInFormWrapper>
      </Container>
    </>
  );
}

export default Authentication;