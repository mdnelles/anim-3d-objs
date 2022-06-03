import FaceBack from "./FaceBack";
import FaceBottom from "./FaceBottom";
import FaceFront from "./FaceFront";
import FaceLeft from "./FaceLeft";
import FaceRight from "./FaceRight";
import FaceTop from "./FaceTop";

export interface FaceControlProps {
   anim1?: string;
   anim2?: string;
   border?: string;
   width?: number;
   height?: number | string;
   depth?: number;
   faceGlobalStyles?:
      | { border: string; bgc: string; opacity: number | string }
      | undefined;
   faces?:
      | {
           front: boolean;
           back: boolean;
           left: boolean;
           right: boolean;
           top: boolean;
           bottom: boolean;
        }
      | undefined;
   tranz: number | string;
}

export const FaceControl = (props: FaceControlProps): any => {
   const color = "#FFF",
      fontWeight: number | string = 800,
      lineHeight: number = 1.2,
      fontSize: number | string = 20,
      textAlign: string | any = "center";
   const { width, height, depth, border, faces, faceGlobalStyles, tranz } =
      props;
   const DoFaceFront = (): any => {
      if (!!faces && !!faces.front) {
         return (
            <FaceFront
               width={width}
               height={height}
               depth={depth}
               id='front'
               bgc='maroon'
               tranz={tranz}
               opacity={!!faceGlobalStyles ? faceGlobalStyles.opacity : 0.5}
               border={border}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     lineHeight,
                     fontSize,
                     textAlign,
                  }}
               >
                  FRONT
               </div>
            </FaceFront>
         );
      } else {
         return <></>;
      }
   };
   const DoFaceBack = (): any => {
      if (!!faces && !!faces.back) {
         return (
            <FaceBack
               width={width}
               height={height}
               depth={depth}
               id='top'
               tranz={tranz}
               bgc='red'
               opacity={0.5}
               border={border}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     lineHeight,
                     fontSize,
                     textAlign,
                  }}
               >
                  BACK
               </div>
            </FaceBack>
         );
      } else {
         return <></>;
      }
   };
   const DoFaceTop = (): any => {
      if (!!faces && !!faces.top) {
         return (
            <FaceTop
               width={width}
               height={height}
               depth={depth}
               id='top'
               tranz={tranz}
               bgc='green'
               opacity={0.5}
               border={border}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     lineHeight,
                     fontSize,
                     textAlign,
                  }}
               >
                  TOP
               </div>
            </FaceTop>
         );
      } else {
         return <></>;
      }
   };
   const DoFaceBottom = (): any => {
      if (!!faces && !!faces.bottom) {
         return (
            <FaceBottom
               width={width}
               height={height}
               depth={depth}
               id='top'
               tranz={tranz}
               bgc='purple'
               opacity={0.5}
               border={border}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     lineHeight,
                     fontSize,
                     textAlign,
                  }}
               >
                  BOTTOM
               </div>
            </FaceBottom>
         );
      } else {
         return <></>;
      }
   };
   const DoFaceRight = (): any => {
      if (!!faces && !!faces.right) {
         return (
            <FaceRight
               width={width}
               height={height}
               depth={depth}
               id='right'
               tranz={tranz}
               border={border}
               faceGlobalStyles={faceGlobalStyles}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     lineHeight,
                     fontSize,
                     textAlign,
                  }}
               >
                  RIGHT
               </div>
            </FaceRight>
         );
      } else {
         return <></>;
      }
   };
   const DoFaceLeft = (): any => {
      if (!!faces && !!faces.left) {
         return (
            <FaceLeft
               width={width}
               height={height}
               depth={depth}
               id='left'
               tranz={tranz}
               bgc='black'
               opacity={0.5}
               border={border}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     lineHeight,
                     fontSize,
                     textAlign,
                  }}
               >
                  LEFT
               </div>
            </FaceLeft>
         );
      } else {
         return <></>;
      }
   };
   return {
      DoFaceFront,
      DoFaceBack,
      DoFaceTop,
      DoFaceBottom,
      DoFaceRight,
      DoFaceLeft,
   };
};
