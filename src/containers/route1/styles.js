import styled from "styled-components"


export const MainContainer = styled.div `
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 36px;
 background: #0A0A10;
 padding: 0;
 margin: 0;



`
export const Image = styled.img`
height: 354px;
    width: 246px;
`

export const H1 = styled.h1 `

color: #FFF;
font-size: 28px;
font-weight: 700;

`

export const Users = styled.li `
width: 342px;
height: 101px;
border-radius: 14px;
background-color: rgba(255, 255, 255, 0.25);
border: none;
  outline: none;
  display: flex;
  flex-direction: column;
padding: 10px;
margin-bottom: 20px;


button {
   border: none;
   background:none;
   width:24px;
   height:28px;
   align-self: flex-end;
   margin-right: 14px;
   margin-bottom:20px;
   cursor: pointer;
   &:hover{
    opacity: 0.5 ;
   }
   &:active{
    opacity: 0.3;
   }
}

p {
    color: #FFF;

font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;
margin-top: 17px;

}

b {

    font-weight: 700;
    font-size: 18px;

}
`

