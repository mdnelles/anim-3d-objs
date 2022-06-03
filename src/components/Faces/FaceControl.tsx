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

   const DoFaceRight = function (): any {
      faces && faces.right ? (
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
      ) : (
         <></>
      );
   };
   return {
      DoFaceRight,
   };
};
