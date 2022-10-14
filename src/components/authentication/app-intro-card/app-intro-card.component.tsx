import React from 'react';

import { getEnvVariable } from '../../../helpers/application.helpers';

import imageSrc from '../../../assets/images/authentication/app-intro.png';

const AppIntroCard = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center content-center p-10">
      <img
        className="mx-auto max-w-full w-36 mb-2.5 lg:w-72 lg:mb-5"
        src={imageSrc}
        alt={getEnvVariable('REACT_APP_DESCRIPTION')}
      />
      <h1 className="text-3xl font-bold mb-7 text-gray-700">
        {getEnvVariable('REACT_APP_TITLE')}
      </h1>
      <div className="text-gray-400 font-medium text-center">
        {getEnvVariable('REACT_APP_DESCRIPTION')}
      </div>
    </div>
  );
}

export default AppIntroCard;