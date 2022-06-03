import FaceLeft from "./FaceLeft";
import FaceRight from "./FaceRight";

export interface FaceControlProps {
   anim1?: string;
   anim2?: string;
   border?: string;
   width?: number;
   height?: number | string;
   depth?: number;
   globalStyles?:
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
   const { width, height, depth, border, faces, globalStyles, tranz } = props;
   //console.log(faces);
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
               globalStyles={globalStyles}
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
      DoFaceRight,
      DoFaceLeft,
   };
};
