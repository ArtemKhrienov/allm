import React from 'react';

import { getEnvVariable } from '../../../helpers/application.helpers';

import imageSrc from '../../../assets/images/authentication/app-intro.png';

import {
  Container,
  Picture,
  Title,
  Subtitle
} from './app-intro-card.styles';

const AppIntroCard = () => {
  return (
    <Container>
      <Picture src={imageSrc} alt={getEnvVariable('REACT_APP_DESCRIPTION')} />
      <Title>{getEnvVariable('REACT_APP_TITLE')}</Title>
      <Subtitle>{getEnvVariable('REACT_APP_DESCRIPTION')}</Subtitle>
    </Container>
  );
}

export default AppIntroCard;