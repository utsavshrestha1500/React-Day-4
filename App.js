import React from "react";
/* import { FaBeer } from 'react-icons/fa'; */
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "bootstrap";
/* import { HeaderStyle } from "./components/style/Header"; */
import { MyButton } from "./components/style/ButtonStyle";
import { StyledContainer } from "./components/style/ContainerStyle";


const App = () => {
  return (
    <StyledContainer>
    <div>
       {/*  <FaBeer/> */}
       {/*  <Button> Click me </Button>  */}
       <MyButton href="{https://www.google.com/}" color = "white" padding = "10px" borderRadius = "10px" fontSize = "18px" fontWeight = "900" backgroundColor = "red">
        Hello
       </MyButton>

       <MyButton color = "white" padding = "10px" borderRadius = "10px" fontSize = "18px" fontWeight = "900" backgroundColor = "blue">
        Submit
       </MyButton>

    </div>
    </StyledContainer>
  );
};

export default App;