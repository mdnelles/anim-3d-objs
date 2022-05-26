import React from "react";
import styled from "styled-components";

//import "../App.css";
//import { CubeFace } from "./components";

//import { Face } from "./Face";
//import { SceneStyle } from "./styles/Obj.styles";

const size: number = 200;
const bgc = "yellow";

const Specs: any = styled.div`
   opacity: 0.5;
   position: absolute;
   width: 100px;
   height: 100px;
   background-color: ${bgc};
   border: #333;
   backface-visibility: visible;
   transform: rotateY(-90deg) translateZ(100px);
`;

interface FaceLeftProps {
   children?: string | any;
}

const FaceLeft = (props: FaceLeftProps) => {
   const { children } = props;
   return (
      <>
         <Specs>{children}</Specs>
      </>
   );
};

export default FaceLeft;
