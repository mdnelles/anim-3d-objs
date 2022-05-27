import React from "react";
import styled from "styled-components";

import "../App.css";
import { AnimWrap } from "./AnimWrap";
//import { CubeFace } from "./components";

import { Face } from "./Face";
import { SceneStyle } from "./styles/Obj.styles";

const size: number = 200;

interface CardProps {
   anim1?: string;
   anim2?: string;
}

const Card = (props: CardProps) => {
   const { anim1 = "", anim2 = "" } = props;
   console.log("App.tsx > anim1 = " + anim1);
   return (
      <SceneStyle size={size}>
         <AnimWrap animName={anim1}>
            <AnimWrap animName={anim2}>
               <Face />
            </AnimWrap>
         </AnimWrap>
      </SceneStyle>
   );
};
/*
         <div className={anim1} style={{ width: size, height: size }}>
            <div className={anim2} style={{ width: size, height: size }}>
               <Face />
            </div>
         </div>
*/

export default Card;
