import styled from "styled-components";
import { AnimStylesProps } from "./Anim";
import { allAnims } from "./Anims";

export const AnimWrap = (props: AnimStylesProps) => {
   const { X360, Y360 } = allAnims();
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
