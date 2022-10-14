import React from 'react';

import AppIntroCard from '../../components/authentication/app-intro-card/app-intro-card.component';
import SignInForm from '../../components/forms/sign-in-form/sign-in-form.component';

import { Container } from './authentication.styles';

const Authentication = () => {
  return (
    <Container className="flex flex-row h-full w-full">
      <div className="flex basis-1/2">
        <AppIntroCard />
      </div>
      <div className="flex basis-1/2 justify-center p-12 lg:flex-row lg:justify-end">
        <SignInForm />
      </div>
    </Container>
  );
}

export default Authentication;