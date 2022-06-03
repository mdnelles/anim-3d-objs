import styled from "styled-components";

interface FaceRightProps {
   bfv?: string;
   bgc?: string;
   border?: string;
   children?: string | any;
   depth?: number | any;
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
   width?: number | string;
   faceGlobalStyles?: object | undefined;
}

const FaceRight = (props: FaceRightProps) => {
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
      faceGlobalStyles = {},
   } = props;

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

   const Specs: any = styled.div`
      opacity: ${opacity};
      position: ${position};
      width: ${width}px;
      height: ${height}px;
      background-color: ${bgc};
      border: ${border};
      backface-visibility: ${bfv};
      transform: rotateY(90deg) translateZ(${tranz}px);
   `;
   return (
      <>
         <Specs>{children}</Specs>
      </>
   );
};

export default FaceRight;
