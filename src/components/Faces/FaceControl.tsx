/*




VOID moved to Cuboid.BuildFace




*/

import Face from "./Face";

export interface FaceControlProps {
   anim1?: string;
   anim2?: string;
   border?: string;
   width?: number;
   height?: number | string;
   depth?: number;
   fgStyles?:
      | { border: string; bgc: string; opac: number | string }
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

export interface FaceBuildProps {
   faceDirection: "string";
}

export const FaceControl = (props: FaceControlProps): any => {
   const color = "#eee",
      fontWeight: number | string = 800,
      fontFamily: string = "helvetica",
      textShadow: string = "1px 1px #555",
      lineHeight: number = 1.2,
      fontSize: number | string = 20,
      textAlign: string | any = "center";
   const { width, height, depth, border, faces, fgStyles, tranz } = props;
   const BuildFace = (props: FaceBuildProps): any => {
      if (!!faces && !!faces.front) {
         return (
            <Face
               width={width}
               height={height}
               depth={depth}
               faceType='front'
               id='front'
               tranz={tranz}
               // if specified opac / bgc / border will over-ride fgStyles
               opac={0.9}
               border={border}
               bgc='#cccc99'
               fgStyles={fgStyles}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     textShadow,
                     lineHeight,
                     fontSize,
                     fontFamily,
                     textAlign,
                  }}
               >
                  FRONT
               </div>
            </Face>
         );
      } else {
         return <></>;
      }
   };
   const DoFaceFront = (): any => {
      if (!!faces && !!faces.front) {
         return (
            <Face
               width={width}
               height={height}
               depth={depth}
               faceType='front'
               id='front'
               tranz={tranz}
               // if specified opac / bgc / border will over-ride fgStyles
               opac={0.9}
               border={border}
               bgc='#cccc99'
               fgStyles={fgStyles}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     textShadow,
                     lineHeight,
                     fontSize,
                     fontFamily,
                     textAlign,
                  }}
               >
                  FRONT
               </div>
            </Face>
         );
      } else {
         return <></>;
      }
   };
   const DoFaceBack = (): any => {
      if (!!faces && !!faces.back) {
         return (
            <Face
               width={width}
               height={height}
               depth={depth}
               faceType='back'
               id='top'
               tranz={tranz}
               bgc='#cccc99'
               fgStyles={fgStyles}
               border={border}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     textShadow,
                     lineHeight,
                     fontSize,
                     fontFamily,
                     textAlign,
                  }}
               >
                  BACK 2
               </div>
            </Face>
         );
      } else {
         return <></>;
      }
   };
   const DoFaceTop = (): any => {
      if (!!faces && !!faces.top) {
         return (
            <Face
               width={width}
               height={height}
               depth={depth}
               faceType='top'
               id='top'
               tranz={tranz}
               bgc='#111'
               fgStyles={fgStyles}
               border={border}
            >
               <div
                  style={{
                     color,
                     textShadow,
                     fontWeight,
                     lineHeight,
                     fontSize,
                     fontFamily,
                     textAlign,
                  }}
               >
                  TOP 2
               </div>
            </Face>
         );
      } else {
         return <></>;
      }
   };
   const DoFaceBottom = (): any => {
      if (!!faces && !!faces.bottom) {
         return (
            <Face
               width={width}
               height={height}
               depth={depth}
               faceType='bottom'
               id='top'
               tranz={tranz}
               fgStyles={fgStyles}
               border={border}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     textShadow,
                     lineHeight,
                     fontFamily,
                     fontSize,
                     textAlign,
                  }}
               >
                  BOTTOM 2
               </div>
            </Face>
         );
      } else {
         return <></>;
      }
   };
   const DoFaceRight = (): any => {
      if (!!faces && !!faces.right) {
         return (
            <Face
               width={width}
               height={height}
               depth={depth}
               faceType='right'
               id='right'
               tranz={tranz}
               border={border}
               fgStyles={fgStyles}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     textShadow,
                     lineHeight,
                     fontFamily,
                     fontSize,
                     textAlign,
                  }}
               >
                  R I G H T
               </div>
            </Face>
         );
      } else {
         return <></>;
      }
   };
   const DoFaceLeft = (): any => {
      if (!!faces && !!faces.left) {
         return (
            <Face
               width={width}
               height={height}
               depth={depth}
               faceType='left'
               id='left'
               tranz={tranz}
               bgc='black'
               fgStyles={fgStyles}
               border={border}
            >
               <div
                  style={{
                     color,
                     fontWeight,
                     textShadow,
                     lineHeight,
                     fontSize,
                     textAlign,
                  }}
               >
                  L E F T
               </div>
            </Face>
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
