import React from "react";
import { useDispatch } from "react-redux";

import Button from "../../controls/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../controls/button/button.component";

import { googleSignInStart } from "../../../store/user/user.action";

import { ReactComponent as GoogleLogo } from "../../../assets/images/buttons/google-icon.svg";

const SignInForm = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <div className="flex flex-row w-full">
      <div className="basis-full">
        <Button
          type="button"
          buttonType={BUTTON_TYPE_CLASSES.white}
          onClick={signInWithGoogle}
        >
          <GoogleLogo className="mr-2 md:mr-3" height="15" width="15" />
          <span className="font-medium">Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
