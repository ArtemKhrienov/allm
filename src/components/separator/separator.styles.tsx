import styled from 'styled-components';

type TTextProps = {
  textBgWidth: number;
}

export const Container = styled.div.attrs({
  className: 'flex items-center justify-center border-b-0 h-0 my-7'
})`
  ::after, ::before {
    content: " ";
    width: 50%;
    border-bottom: 1px solid #eff2f5;
    box-sizing: border-box;
  }
  
  ::before {
    margin-left: 1.25rem;
  }

  ::after {
    margin-right: 1.25rem;
  }
`

export const Text = styled.span.attrs({
  className: 'font-medium text-center text-xs text-gray-400'
})<TTextProps>`
  width: ${({ textBgWidth }) => `${textBgWidth}rem`}
`