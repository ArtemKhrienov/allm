import React, { FC, ButtonHTMLAttributes } from "react";

import { BaseButton, WhiteButton } from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  white = "white",
}

type TButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.white]: WhiteButton,
  }[buttonType]);

const Button: FC<TButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? "Loading..." : children}
    </CustomButton>
  );
};

export default Button;
