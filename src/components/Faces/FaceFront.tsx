import styled from "styled-components";

interface FaceFrontProps {
   bfv?: string;
   bgc?: string | boolean;
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
   opac?: number | string | boolean | undefined;
   padding?: number | string;
   position?: number;
   style?: string;
   textAlign?: string;
   top?: number;
   tranz?: number | string;
   width?: number;
}

const FaceFront = (props: FaceFrontProps) => {
   let {
      bfv = "visible",
      bgc = false,
      border = "0px solid #fff",
      children,
      depth = 10,
      fgStyles = {},
      height = 10,
      id = 0,
      left = 0,
      margin = 0,
      opac = false,
      padding = 20,
      position = "relative",
      textAlign = "left",
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
      opacity: ${!opac ? fgStyles.opac : !!opac ? opac : 1};
      position: ${position};
      left: ${left};
      margin: ${margin};
      padding: ${padding};
      text-align: ${textAlign};
      width: ${width}px;
      height: ${height}px;
      background-color: ${!!bgc ? bgc : !!fgStyles.bgc ? fgStyles.bgc : ""};
      border: ${border};
      backface-visibility: ${bfv};
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
