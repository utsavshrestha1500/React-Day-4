import styled from "styled-components";

 export const MyButton = styled.button`

background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color};
padding: 10px;
border-radius:10px;
font-size: 18px;
font-weight:900;
margin-left: 40px;
margin-top:40px;

&:hover {
    backgroundColor: green;
}

`;

/* const BlueButton = styled.button`
background-color:blue;
color: white;
padding: 10px;
border-radius:10px;
font-size: 18px;
font-weight:900;


`; */