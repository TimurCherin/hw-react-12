import { styled } from 'styled-components'

export const FormWrap = styled.div`
   width: 600px;
   padding: 40px;
   border: solid #FFF 1px;
   border-radius: 25px;
`

export const FormName = styled.h2`
   color: black;
   font-size: 30px;
   font-weight: 400;
   margin-bottom: 30px;
`

export const FormList = styled.ul`
   width: 520px;
   height: 130px;
   gap: 5px;
   margin-bottom: 30px;
   list-style: none;
   padding: 0px;
`

export const FormItem = styled.li`
   width: 520px;
   height: 40px;
   gap: 20px;
   align-items: center;
   display: flex;
`

export const FormItemName = styled.p`
   color: black;
   font-size: 14px;
   line-height: 1.6; 
`

export const FormItemInfo = styled.p`
   color: black;
   font-size: 14px;
   line-height: 1.6;
`

export const FormItemPost = styled.a`
   display: flex;
   width: 30px;
   height: 30px;
   justify-content: center;
   align-items: center;
   gap: 10px;
   border-radius: 50px;
   background: var(--Pink-BG, #FFF2F2);
`

export const FormPost = styled.a`
   border-radius: 50px;
   background-color: grey;
   display: flex;
   width: 35px;
   height: 35px;
   justify-content: center;
   align-items: center;
`

export const FormInfoList = styled.ul`
   width: 520px;
   height: 140px;
   gap: 5px;
   margin-bottom: 30px;
   padding: 0px;
`

export const FormInfoItem = styled.li`
   width: 520px;
   height: 40px;
   gap: 5px;
   align-items: center;
   display: flex;
`

export const FormBtn = styled.button`
   display: flex;
   height: 40px;
   padding: 10px 30px;
   justify-content: center;
   align-items: center;
   gap: 15px;
   align-self: stretch;
   border-radius: 50px;
   background-color: #A63A50;
   color: #fff;
   border-color: #fff;
   margin-top: 30px;
   width: 100%;
`

export const FormInfoWrap = styled.div`
   margin-top: 30px;
   margin-bottom: 30px;
`