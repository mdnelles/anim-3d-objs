import React from "react";
import styled from "styled-components";

interface FaceProps {
   bfv?: string;
   bgc?: string;
   border?: string;
   children?: string | any;
   depth?: number;
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

const FaceTop = (props: FaceProps) => {
   let {
      bfv = "visible",
      bgc = "",
      border = "0px solid #fff",
      children,
      depth = 10,
      height = 10,
      id = 0,
      opacity = 1,
      position = "absolute",
      tranz = 80,
      width = 10,
   } = props;

   tranz = +depth / 2 || 80;
   height = +depth;

   const Specs: any = styled.div`
      opacity: ${opacity};
      position: ${position};
      width: ${width}px;
      height: ${height}px;
      background-color: ${bgc};
      border: ${border};
      backface-visibility: ${bfv};
      transform: rotateX(90deg) translateZ(${tranz}px);
      top: 0;
   `;
   return (
      <>
         <Specs>{children}</Specs>
      </>
   );
};

export default FaceTop;
