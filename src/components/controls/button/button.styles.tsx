import styled from 'styled-components';

export const BaseButton = styled.button.attrs({
  className: 'flex flex-row w-full items-center justify-center px-2.5 py-3 sm:px-8 text-sm ' +
    'my-2 transition duration-150 ease-in-out rounded border ' +
    'focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2'
})``

export const WhiteButton = styled(BaseButton).attrs({
  className: 'bg-white text-gray-600 border-gray-300  ' +
    'hover:bg-gray-100 hover:text-sky-500 ' +
    'focus:ring-gray-800'
})``