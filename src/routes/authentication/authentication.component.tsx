import React from "react";

import config from "../../config";

import SignInForm from "../../components/forms/sign-in-form/sign-in-form.component";

import welcomeImg from "../../assets/images/welcome.png";
import logoImg from "../../assets/images/logo.png";

import { GradientBackground } from "./authentication.styles";

const Authentication = () => {
  return (
    <>
      <GradientBackground />
      <div className="flex h-full w-full justify-center p-8 lg:p-12">
        <div className="bg-white flex p-10 justify-center items-center rounded shadow w-full md:basis-3/5">
          <div className="md:w-[25rem]">
            <img
              className="mx-auto max-w-full w-11 mb-2 md:w-14"
              src={logoImg}
              alt={config.env.REACT_APP_TITLE}
            />

            <div className="text-center mb-7">
              <h1 className="text-gray-700 text-xl font-bold mb-2 md:text-2xl">
                Welcome to {config.env.REACT_APP_TITLE}
              </h1>
              <div className="text-gray-400 font-medium text-xs md:text-sm">
                {config.env.REACT_APP_DESCRIPTION}
              </div>
            </div>

            <img
              className="mx-auto max-w-full w-36 mb-7 md:w-64"
              src={welcomeImg}
              alt={config.env.REACT_APP_DESCRIPTION}
            />

            <SignInForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
