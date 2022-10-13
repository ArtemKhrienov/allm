import React from 'react';
import styled from 'styled-components';
import tw  from 'tailwind-styled-components';
import { renderToStaticMarkup } from 'react-dom/server';

import { ReactComponent as BgPattern } from '../../assets/images/bg-pattern.svg';

const stringBgPattern = encodeURIComponent(renderToStaticMarkup(<BgPattern />));

export const Container = tw.div<Record<string, unknown>>`
  flex
  flex-row
  h-full
  w-full
`

export const AppIntroWrapper = tw.div<Record<string, unknown>>`
  flex
  basis-1/2
`

export const SignInFormWrapper = tw.div<Record<string, unknown>>`
  flex
  basis-1/2
`

export const Background = styled.div<Record<string, unknown>>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: url("data:image/svg+xml,${stringBgPattern}") center repeat;
  background-size: 420px auto;
  z-index: -100;
`