import React from "react";
import styled from "styled-components";

interface FaceLeftProps {
   bfv?: string;
   bgc?: string;
   border?: string;
   children?: string | any;
   depth?: number | any;
   fgStyles?: object | any;
   fontSize?: number | string;
   height?: number | string;
   id?: string | number;
   imgSrc?: string;
   left?: number;
   lineHeight?: number;
   margin?: number | string;
   opac?: number | string | undefined;
   padding?: number | string;
   position?: number;
   style?: string;
   textAlign?: string;
   top?: number;
   tranz?: number | string;
   width?: number;
}

const FaceLeft = (props: FaceLeftProps) => {
   let {
      bfv = "visible",
      bgc = "",
      border = "0px solid #fff",
      children,
      depth = 10,
      fgStyles = {},
      fontSize = 10,
      height = 10,
      id = 0,
      imgSrc = "",
      left = 0,
      lineHeight = 1,
      margin = 0,
      opac = 2,
      padding = 20,
      position = "absolute",
      textAlign = "left",
      top = 0,
      tranz = 80,
      width = 10,
   } = props;

   if (height > width && !depth) {
      console.log(1);
      tranz = -(+height / 2 - +width);
      width = +height;
   } else if (width > height && !depth) {
      console.log(2);
      tranz = +height / 2;
      height = +width;
   } else {
      tranz = +depth / 2;
      width = +depth;
   }

   const Specs: any = styled.div`
      opacity: ${opac === 2 ? fgStyles.opac : 1};
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
      transform: rotateY(-90deg) translateZ(${tranz}px);
      top: ${top};
   `;
   return (
      <>
         <Specs>{children}</Specs>
      </>
   );
};

export default FaceLeft;
