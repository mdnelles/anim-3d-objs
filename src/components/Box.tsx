import React from "react";
import styled from "styled-components";

import "../App.css";
import { Face } from "./Face";
import FaceLeft from "./Faces/FaceLeft";
import FaceRight from "./FaceRight";

export const SceneStyle: any = styled.div`
   width: 100px;
   height: 100px;
   perspective: 600px;
   perspective-origin: 50% 50%;
`;

const size: number = 100;

interface CardProps {
   anim1?: string;
   anim2?: string;
}

const CubeWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   transform-style: preserve-3d;
   border: "3px dashed #0f0";
   background-color: #cccc99;
`;

const Box = (props: CardProps) => {
   const { anim1 = "", anim2 = "" } = props;
   return (
      <SceneStyle size={size}>
         <div
            className={anim1}
            style={{ width: size, height: size, transformStyle: "preserve-3d" }}
         >
            <div
               className={anim2}
               style={{
                  width: size,
                  height: size,
                  transformStyle: "preserve-3d",
               }}
            >
               <CubeWrapper>
                  <FaceRight>2</FaceRight>
                  <FaceLeft>2</FaceLeft>
               </CubeWrapper>
            </div>
         </div>
      </SceneStyle>
   );
};

export default Box;
