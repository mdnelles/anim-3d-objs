import styled from "styled-components";

import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";
import Face from "./Faces/Face";

interface CubeProps {
   anim1?: string;
   anim2?: string;
   border?: string;
   width?: number;
   height?: number | string;
}

const CubeWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   transform-style: preserve-3d;
`;

const Cuboid = (props: CubeProps) => {
   let { anim1 = "", anim2 = "", width = 5, height = 5, border = "" } = props;
   let tranz: number = +height / 2;
   const color = "#FFF",
      fontWeight: number | string = 800,
      lineHeight: number = 5,
      fontSize: number | string = 20,
      textAlign: string | any = "center";
   return (
      <SceneStyle width={width} height={height}>
         <AnimWrap duration={15} iterationCount='infinite' animName={anim1}>
            <AnimWrap duration={5} iterationCount='infinite' animName={anim2}>
               <CubeWrapper>
                  <Face
                     width={width}
                     height={height}
                     id='right'
                     tranz={tranz}
                     faceType='right'
                     bgc='blue'
                     opac={0.5}
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
                        RIGHT
                     </div>
                  </Face>
                  <Face
                     width={width}
                     height={height}
                     id='left'
                     tranz={tranz}
                     faceType='left'
                     bgc='black'
                     opac={0.5}
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
                  </Face>
                  <Face
                     width={width}
                     height={height}
                     id='front'
                     faceType='front'
                     bgc='maroon'
                     tranz={tranz}
                     opac={0.5}
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
                  </Face>
                  <Face
                     width={width}
                     height={height}
                     id='top'
                     faceType='top'
                     tranz={tranz}
                     bgc='green'
                     opac={0.5}
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
                  </Face>
                  <Face
                     width={width}
                     height={height}
                     faceType='back'
                     id='back'
                     tranz={tranz}
                     bgc='red'
                     opac={0.5}
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
                  </Face>
                  <Face
                     width={width}
                     height={height}
                     faceType='bottom'
                     id='bottom'
                     tranz={tranz}
                     bgc='purple'
                     opac={0.5}
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
                  </Face>
               </CubeWrapper>
            </AnimWrap>
         </AnimWrap>
      </SceneStyle>
   );
};

export default Cuboid;
