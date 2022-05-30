import React from "react";
import styled, { keyframes } from "styled-components";

/////////// X360
const X360 = keyframes`
   from {
      -webkit-transform: rotateX(360deg);
      transform: rotateX(360deg);
   }
   to {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
   }
}`;

//////// Y360
const Y360 = keyframes`
   from {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
   }
   to {
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
   }
`;

interface AnimStylesProps {
   duration?: number | string;
   iterationCount?: number | string;
   animName?: string;
   fillMode?: string;
   children?: any;
   borderColor?: string;
}

export const AnimWrap = (props: AnimStylesProps) => {
   const {
      duration = 0,
      iterationCount = 0,
      animName = "noAnim",
      fillMode = "forward",
      children = "",
      borderColor = "",
   } = props;

   const AnimWrapDiv: any = styled.div`
      width: 100%;
      height: 100%;
      position: relative;
      border: 1px dotted ${borderColor};
      transform-style: preserve-3d;
      -webkit-animation-duration: ${duration}s;
      animation-duration: ${duration}s;
      -webkit-animation-iteration-count: ${iterationCount};
      animation-iteration-count: ${iterationCount};
      -webkit-animation-name: ${eval(animName)};
      animation-name: ${eval(animName)};
      -webkit-animation-fill-mode: ${fillMode};
      animation-fill-mode: ${fillMode};
   `;

   return <AnimWrapDiv>{children}</AnimWrapDiv>;
};
