import React from "react";
import styled from "styled-components";

interface FaceLeftProps {
   bfv?: string;
   bgc?: string;
   border?: string;
   children?: string | any;
   fontSize?: number | string;
   height?: number | string;
   id?: string | number;
   imgSrc?: string;
   left?: number;
   lineHeight?: number;
   margin?: number | string;
   opacity?: number;
   padding?: number | string;
   position?: number;
   style?: string;
   textAlign?: string;
   top?: number;
   tranz?: number | string;
   width?: number;
}

const FaceLeft = (props: FaceLeftProps) => {
   const {
      bfv = "visible",
      bgc = "",
      border = "0px solid #fff",
      children,
      fontSize = 10,
      height = 10,
      id = 0,
      imgSrc = "",
      left = 0,
      lineHeight = 1,
      margin = 0,
      opacity = 1,
      padding = 20,
      position = "relative",
      style = "",
      textAlign = "left",
      top = 0,
      tranz = 80,
      width = 10,
   } = props;

   const Specs: any = styled.div`
      opacity: ${opacity};
      position: ${position};
      font-size: ${fontSize};
      background-image: url("${imgSrc}");
      left: ${left};
      line-height: ${lineHeight};
      margin: ${margin};
      padding: ${padding};
      text-align: ${textAlign};
      width: ${width}px;
      height: ${height}px;
      background-color: ${bgc};
      border: ${border};
      backface-visibility: ${bfv};
      transform: rotateY(-45deg) translateZ(${tranz}px);
      top: ${top};
   `;
   return (
      <>
         <Specs>{children}</Specs>
      </>
   );
};

export default FaceLeft;
