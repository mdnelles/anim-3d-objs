import styled from "styled-components";
import { AnimStylesProps } from "./Anim";
import { allAnims } from "./Anims";

export const AnimWrap = (props: AnimStylesProps) => {
   const {
      duration = 0,
      iterationCount = 0,
      animName = "noAnim",
      fillMode = "forward",
      children = "",
      borderColor = "",
      xdegs,
      ydegs,
   } = props;

   const {
      X360,
      Y360,
      fadeInkf,
      wobY,
      wobX,
      fwdx018,
      fwdx1836,
      fwdx09,
      fwdx918,
      fwdx1827,
      fwdx2736,
      fwdy018,
      fwdy1836,
      fwdy09,
      fwdy918,
      fwdy1827,
      fwdy2736,
   } = allAnims({ xdegs, ydegs });

   const AnimWrapDiv: any = styled.div`
      width: 100%;
      height: 100%;
      position: relative;
      border: 0px dotted ${borderColor};
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
