import React from "react";
import styled from "styled-components";

//import "../App.css";
//import { CubeFace } from "./components";

//import { Face } from "./Face";
//import { SceneStyle } from "./styles/Obj.styles";

const size: number = 200;
const bgc = "#00F";

const Specs: any = styled.div`
   opac: 0.5;
   position: absolute;
   width: 100px;
   height: 100px;
   background-color: "blue";
   border: #333;
   backface-visibility: visible;
   transform: rotateY(90deg) translateZ(100px);
`;

interface FaceRightProps {
   children?: string | any;
}

const FaceRight = (props: FaceRightProps) => {
   const { children } = props;
   return (
      <>
         <Specs>{children}</Specs>
      </>
   );
};

export default FaceRight;
