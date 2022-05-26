import React from "react";
import styled from "styled-components";

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

   const AnimWrapStyle = styled.div`
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      border: "3px dashed #0f0";
      background-color: #cccc99;
      animation-name: ${animName};
      animation-duration: ${animDuration}s;
      animation-iteration-count: ${animCount};
   `;

   return <AnimWrapStyle>{children}</AnimWrapStyle>;
};
