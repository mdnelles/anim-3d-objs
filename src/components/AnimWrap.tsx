import styled from "styled-components";
//import * as STYLES from "./styles/Anims.styles";
import { X360 } from "./styles/Anims.styles";

interface AnimWrapProps {
   children?: any;
   animName?: string;
   animDuration?: number | string;
   animCount?: string;
}

export const AnimWrap = (props: AnimWrapProps) => {
   const {
      children = "",
      animName = "",
      animDuration = 0,
      animCount = "",
   } = props;

   console.log("AnimWrap.tsx > animName = " + animName);

   const AnimWrapStyle = styled.div`
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      border: "3px dashed #0f0";
      background-color: #cccc99;
   `;

   //  animation-duration: ${animDuration}s;
   //  animation-iteration-count: ${animCount};

   return (
      <X360>
         <AnimWrapStyle>{children}</AnimWrapStyle>
      </X360>
   );
};
