import styled from "styled-components";

interface FaceFrontProps {
   bfv?: string | boolean;
   bgc?: string | boolean;
   border?: string | boolean;
   children?: string | any;
   fgStyles?: object | any;
   depth?: number | any;
   height?: number | string;
   id?: string | number;
   left?: number;
   margin?: number | string;
   opac?: number | string | boolean | undefined;
   padding?: number | string;
   position?: number;
   top?: number;
   tranz?: number | string;
   width?: number | string;
}

const FaceFront = (props: FaceFrontProps) => {
   let {
      bfv = false,
      bgc = false,
      border = false,
      children,
      depth = 10,
      fgStyles = {},
      height = 10,
      id = 0,
      left = 0,
      margin = 0,
      opac = false,
      padding = 20,
      position = "absolute",
      top = 0,
      tranz = 80,
      width = 10,
   } = props;

   if (height > width && depth) {
      tranz = +depth / 2;
   } else if (width > height && depth) {
      tranz = +depth / 2;
   }
   console.log("---opac: " + opac);
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
      transform: rotateY(0deg) translateZ(${tranz}px);
      top: ${top};
   `;
   return (
      <>
         <Specs>{children}</Specs>
      </>
   );
};

export default FaceFront;
