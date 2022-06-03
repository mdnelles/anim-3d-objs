import styled from "styled-components";

interface FaceBackProps {
   bfv?: string;
   bgc?: string;
   border?: string;
   children?: string | any;
   fgStyles?: object | any;
   depth?: number | any;
   height?: number | string;
   id?: string | number;
   left?: number;
   margin?: number | string;
   opac?: number | string | undefined;
   padding?: number | string;
   position?: number;
   style?: string;
   top?: number;
   tranz?: number | string;
   width?: number | string;
}

const FaceBack = (props: FaceBackProps) => {
   let {
      bfv = "visible",
      bgc = "",
      border = "0px solid #fff",
      children,
      depth = 10,
      fgStyles = {},
      height = 10,
      id = 0,
      left = 0,
      margin = 0,
      opac = 2,
      padding = 20,
      position = "absolute",
      style = "",
      top = 0,
      tranz = 80,
      width = 10,
   } = props;

   if (height > width && depth) {
      tranz = +depth / 2;
   } else if (width > height && depth) {
      tranz = +depth / 2;
   }

   const Specs: any = styled.div`
      opacity: ${opac === 2 ? fgStyles.opac : 1};
      position: ${position};
      left: ${left};
      margin: ${margin};
      padding: ${padding};
      width: ${width}px;
      height: ${height}px;
      background-color: ${bgc};
      border: ${border};
      backface-visibility: ${bfv};
      transform: rotateY(180deg) translateZ(${tranz}px);
      top: ${top};
   `;
   return (
      <>
         <Specs>{children}</Specs>
      </>
   );
};

export default FaceBack;
