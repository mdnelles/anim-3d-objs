import styled from "styled-components";
import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";
import { FaceControl } from "./Faces/FaceControl";
import { ObjProps, BuildProps } from "./Faces/FaceInter";
import Face from "./Faces/Face";

const ObjWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   transform-style: preserve-3d;
`;

const Obj = (props: ObjProps) => {
   let color = "#eee",
      fontWeight: number | string = 800,
      fontFamily: string = "helvetica",
      textShadow: string = "1px 1px #555",
      lineHeight: number = 1.2,
      fontSize: number | string = 20,
      textAlign: string | any = "center";

   //const { width, height, depth, border, faces, fgStyles, tranz } = props;
   let {
      anim1 = "",
      anim2 = "",
      width = 5,
      height = 5,
      depth = 5,
      faces,
      fgStyles,
      tranz = (+height / 2) | 0,
   } = props;
   const tmp: any = props;

   const BuildFace = (props: BuildProps): any => {
      const { faceType, children } = props;
      if (!!faces && !!faces.front) {
         return (
            <Face
               width={width}
               height={height}
               depth={depth}
               faceType={faceType}
               id={faceType}
               tranz={tranz}
               // if specified opac / bgc / border will over-ride fgStyles
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
                  {children}
               </div>
            </Face>
         );
      } else {
         return <></>;
      }
   };

   return (
      <SceneStyle width={width} height={height}>
         <AnimWrap duration={15} iterationCount='infinite' animName={anim1}>
            <AnimWrap duration={5} iterationCount='infinite' animName={anim2}>
               <ObjWrapper>
                  {BuildFace("front", "F R O N T 3")}
                  {BuildFace("right", "R I G H T 3")}
                  {BuildFace("back", "B A C K 3")}
                  {BuildFace("left", "L E F T 3")}
                  {BuildFace("top", "T O P 3")}
                  {BuildFace("bottom", "B O T T O M 3")}

                  {/*{DoFaceLeft()}
                  {DoFaceFront()}
                  {DoFaceTop()}
                  {DoFaceBack()}
                  {DoFaceBottom()}*/}
               </ObjWrapper>
            </AnimWrap>
         </AnimWrap>
      </SceneStyle>
   );
};

export default Obj;
