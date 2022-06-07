import styled from "styled-components";
import { FaceProps, VarsProps } from "./FaceInter";

const Face = (props: FaceProps): any => {
   let {
      bfv = false,
      bgc = false,
      border = false,
      children,
      depth = 10,
      faceType,
      fgStyles = {},
      fontFamily,
      height = 10,
      inStyles = false,
      id = false,
      left = 0,
      margin = 0,
      opac = false,
      padding = 20,
      position = "absolute",
      top = 0,
      tranz = 80,
      width = 10,
   } = props;

   if (faceType === "bottom") {
      console.log("inStyles: ");
      console.log(inStyles);
      console.log("inStyles[faceType]");
      console.log(inStyles[faceType]);
      console.log(inStyles["bottom"].bgc);
   }

   let transform;

   const setCustomVars = (vars: VarsProps, props: FaceProps) => {
      bfv = !!vars && !!vars.bfv ? vars.bfv : props.bfv;
      bgc = !!vars && !!vars.bgc ? vars.bgc : props.bgc;
      opac = !!vars && !!vars.opac ? vars.opac : props.opac;
      border = !!vars && !!vars.border ? vars.border : props.border;
      fontFamily =
         !!vars && !!vars.fontFamily ? vars.fontFamily : props.fontFamily;
      return { bfv, bgc, border, opac, fontFamily };
   };

   if (faceType === "bottom") {
      tranz = +height - +depth / 2;
      height = +depth;
      transform = `transform: rotateX(-90deg) translateZ(${tranz}px);`;
      let { bfv, bgc, border, opac, fontFamily } = setCustomVars(
         inStyles["bottom"],
         props
      );
   } else if (faceType === "front") {
      if (!!depth) tranz = +depth / 2;
      transform = `transform: rotateY(0deg) translateZ(${tranz}px);`;
      let { bfv, bgc, border, opac, fontFamily } = setCustomVars(
         inStyles["front"],
         props
      );
   } else if (faceType === "back") {
      if (!!depth) tranz = +depth / 2;
      transform = `transform: rotateY(180deg) translateZ(${tranz}px);`;
   } else if (faceType === "top") {
      height = +depth;
      if (!!depth) tranz = +depth / 2;
      transform = `transform: rotateX(90deg) translateZ(${tranz}px);`;
   } else if (faceType === "right") {
      if (height > width && !depth) {
         tranz = -(+height / 2 - +width);
         width = +height;
      } else if (width > height && !depth) {
         tranz = +height / 2;
         height = +width;
      } else {
         tranz = +width - +depth / 2;
         width = +depth;
      }
      transform = `transform: rotateY(90deg) translateZ(${tranz}px);`;
   } else if (faceType === "left") {
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
      transform = `transform: rotateY(-90deg) translateZ(${tranz}px);`;
   }

   const Specs: any = styled.div`
      opacity: ${!!opac ? opac : fgStyles.opac};
      position: ${position};
      left: ${left};
      margin: ${margin};
      padding: ${padding};
      width: ${width}px;
      height: ${height}px;
      background-color: ${!!bgc ? bgc : fgStyles.bgc};
      border: ${!!border ? border : fgStyles.border};
      backface-visibility: ${!!bfv ? bfv : fgStyles.bfv};
      ${transform}
      top: ${top};
   `;
   return <Specs>{children}</Specs>;
};

export default Face;
