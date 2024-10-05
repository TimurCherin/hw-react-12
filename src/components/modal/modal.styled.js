import { styled } from 'styled-components'

export const FormWrap = styled.div`
   padding: 40px;
   border: solid #FFF 1px;
   border-radius: 25px;
   width: 800px;
   height: 400px;
   margin-left: auto;
   margin-right: auto;
   background-color: wheat;
   display: flex;
`
export const FormTextWrap = styled.div`
   padding-left: 20px;
   gap: 20px;
`


export const FormText = styled.p`
   font-size: 24px;
`

export const FormImg = styled.img`
   width: 200px;
   height: 200px;
`

export const FormCloseBtn = styled.button`
   position: absolute;
   right: 630px;
   top: 25px;
   width: 32px;
   height: 32px;
   opacity: 0.3;

  &:hover {
  opacity: 1;
   }
`