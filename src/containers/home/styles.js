import styled from "styled-components";
import Image from "../../img/homeburger.png"
import { Link } from "react-router-dom";

export const Containeritems = styled.div`
  background-color: #0a0a10;
  
 
  margin: 0;
  padding: 0;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const ContainerInput = styled.div `
display: flex;
flex-direction: column;


`

export const H1 = styled.h1`
color: #FFF;
font-size: 28px;
margin-top: 25px;
margin-bottom: 76px;
font-weight: 700;

`

export const P = styled.p`
color: #EEE;
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.408px;
margin: 0;
`;
export const Input = styled.input`
display: flex;
padding: 19px 139px 18px 15px;
align-items: center;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
margin-bottom: 42px;
`;

export const Button = styled(Link)`
display: flex;
width: 342px;
height: 68px;
padding: 0px 113px;
justify-content: center;
align-items: center;
background: #D93856;
border: none;
cursor: pointer;
text-decoration:none;
color: white;
font-weight: 900;
margin-bottom: 20px;
&:hover{
  opacity: 0.9;
}

&:active{

  opacity: 0.6;
}
`

export const Burger = styled.img `
background-image: url(${Image});
margin-top:11px;
`




