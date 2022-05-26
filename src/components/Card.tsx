import React from "react";
import styled from "styled-components";

import "../App.css";
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
   return (
      <SceneStyle size={size}>
         <div className={anim1} style={{ width: size, height: size }}>
            <div className={anim2} style={{ width: size, height: size }}>
               <Face />
            </div>
         </div>
      </SceneStyle>
   );
};

export default Card;
