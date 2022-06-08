import styled from "styled-components";
import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";
import { CuboidProps, BuildProps } from "./Faces/FaceInter";
import Face from "./Faces/Face";

const CuboidWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   transform-style: preserve-3d;
`;

const Cuboid = (props: CuboidProps): any => {
   let color = "#eee",
      fontWeight: number | string = 800,
      fontFamily: string = "helvetica",
      textShadow: string = "1px 1px #555",
      lineHeight: number = 1.2,
      fontSize: number | string = 20,
      textAlign: string | any = "center";

   let {
      animSpecs = {},
      width = 5,
      height = 5,
      depth = 5,
      faces,
      globalStyles,
      indivStyles,
      tranz = (+height / 2) | 0,
   } = props;
   const tmp: any = props;

   const buildFace = (faceType: any, child: any): any => {
      //const { faceType, child } = props;

      return (
         <Face
            width={width}
            height={height}
            depth={depth}
            faceType={faceType}
            id={faceType}
            tranz={tranz}
            // if specified opac / bgc / border will over-ride globalStyles
            globalStyles={globalStyles}
            indivStyles={indivStyles}
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
               {child}
            </div>
         </Face>
      );
   };

   return (
      <SceneStyle width={width} height={height}>
         <AnimWrap
            duration={animSpecs.anim1duration}
            iterationCount={animSpecs.anim1}
            animName={animSpecs.anim1}
            xdegs={70}
         >
            <AnimWrap
               duration={animSpecs.anim2duration}
               iterationCount='infinite'
               animName={animSpecs.anim2}
               ydegs={70}
            >
               <CuboidWrapper>
                  {!!faces && !!faces.front
                     ? buildFace("front", "FRONT")
                     : null}
                  {!!faces && !!faces.right
                     ? buildFace("right", "RIGHT")
                     : null}
                  {!!faces && !!faces.back ? buildFace("back", "BACK") : null}
                  {!!faces && !!faces.left ? buildFace("left", "LEFT") : null}
                  {!!faces && !!faces.top ? buildFace("top", "TOP") : null}
                  {!!faces && !!faces.bottom
                     ? buildFace("bottom", "BOTTOM")
                     : null}
               </CuboidWrapper>
            </AnimWrap>
         </AnimWrap>
      </SceneStyle>
   );
};

export default Cuboid;
