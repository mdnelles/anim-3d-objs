import React from "react";
import styled from "styled-components";

import { Face } from "./Face";
import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";

const size: number = 200;

interface CardProps {
   anim1?: string;
   anim2?: string;
   width?: number | string;
   height?: number | string;
}

const Card = (props: CardProps) => {
   const { anim1 = "", anim2 = "", width = 5, height = 5 } = props;
   console.log("App.tsx > anim1 = " + anim1);
   return (
      <SceneStyle size={size}>
         <AnimWrap duration={5} iterationCount='infinite' animName={anim1}>
            <AnimWrap duration={5} iterationCount='infinite' animName={anim2}>
               <Face width={width} height={height} />
            </AnimWrap>
         </AnimWrap>
      </SceneStyle>
   );
};

export default Card;
