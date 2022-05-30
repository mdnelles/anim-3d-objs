import React from "react";
import styled from "styled-components";

import { Face } from "./Face";
import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";

interface CardProps {
   anim1?: string;
   anim2?: string;
   width?: number | string;
   height?: number | string;
}

const Card = (props: CardProps) => {
   const { anim1 = "", anim2 = "", width = 100, height = 200 } = props;
   console.log("App.tsx > anim1 = " + anim1);
   return (
      <SceneStyle width={width} height={height}>
         <AnimWrap duration={5} iterationCount='infinite' animName={anim1}>
            <AnimWrap duration={5} iterationCount='infinite' animName={anim2}>
               <Face width={width} height={height} />
            </AnimWrap>
         </AnimWrap>
      </SceneStyle>
   );
};

export default Card;
