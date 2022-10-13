import tw from 'tailwind-styled-components';

export const Container = tw.div<Record<string, unknown>>`
  flex
  flex-col 
  w-full
  h-full
  items-center
  justify-center
  content-center
  p-10
`

export const Picture = tw.img<Record<string, unknown>>`
  mx-auto
  max-w-full
  w-36
  lg:w-72
  mb-2.5
  lg:mb-5
`

export const Title = tw.h1<Record<string, unknown>>`
  text-3xl
  font-bold
  mb-7
  text-gray-700
`

export const Subtitle = tw.div<Record<string, unknown>>`
  text-gray-400
  font-medium
  text-center
`