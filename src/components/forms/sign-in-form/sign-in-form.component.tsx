import React from 'react';

import Button from '../../controls/button/button.component';
import Separator from '../../separator/separator.component';

import { BUTTON_TYPE_CLASSES } from '../../controls/button/button.component';

import { ReactComponent as GoogleLogo } from '../../../assets/images/buttons/google-icon.svg';

const SignInForm = () => {
  return (
    <div className="bg-white flex p-10 justify-center items-center rounded shadow w-full">
      <div className="md:w-[25rem]">
        <form className="w-full ">
          <div className="text-center mb-7">
            <h1 className="text-gray-700 text-2xl font-bold mb-2">
              Sign In
            </h1>
            <div className="text-gray-400 font-medium text-sm">
              Authenticate with social campaigns
            </div>
          </div>
          <div className="flex flex-row">
            <div className="basis-full">
              <Button buttonType={BUTTON_TYPE_CLASSES.white}>
                <GoogleLogo className="mr-3" height="15" width="15" />
                <span className="font-medium">Sign in with Google</span>
              </Button>
            </div>
          </div>
          <Separator text="Or with email" />
        </form>
      </div>
    </div>
  );
}

export default SignInForm;