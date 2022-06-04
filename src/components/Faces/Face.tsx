import styled from "styled-components";
import { FaceProps } from "./FaceInter";

const Face = (props: FaceProps): any => {
   let {
      bfv = false,
      bgc = false,
      border = false,
      children,
      depth = 10,
      faceType,
      fgStyles = {},
      height = 10,
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

   let transform;

   if (faceType === "bottom") {
      tranz = +height - +depth / 2;
      height = +depth;
      transform = `transform: rotateX(-90deg) translateZ(${tranz}px);`;
   } else if (faceType === "front") {
      if (!!depth) tranz = +depth / 2;
      transform = `transform: rotateY(0deg) translateZ(${tranz}px);`;
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
   return (
      <>
         <Specs>{children}</Specs>
      </>
   );
};

export default Face;
