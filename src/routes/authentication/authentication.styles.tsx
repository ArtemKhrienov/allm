import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GradientBackground = styled.div.attrs({
  className: "w-full h-full",
})`
  position: absolute;
  background: linear-gradient(-45deg, #0ea5e9, #16a34a, #1f9ded, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  z-index: -100;
`;
