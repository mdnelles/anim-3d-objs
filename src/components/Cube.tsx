import styled from "styled-components";
import FaceRight from "./Faces/FaceRight";
import FaceFront from "./Faces/FaceFront";
import FaceLeft from "./Faces/FaceLeft";
import FaceTop from "./Faces/FaceTop";
import FaceBack from "./Faces/FaceBack";
import FaceBottom from "./Faces/FaceBottom";
import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";

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

const Cube = (props: CubeProps) => {
   const { anim1 = "", anim2 = "", width = 5, height = 5, border = "" } = props;
   let tranz: number = +height / 2;
   const color = "#FFF",
      fontWeight: number | string = 800,
      lineHeight: number = 5,
      fontSize: number | string = 20,
      textAlign: string | any = "center";
   return (
      <SceneStyle size={width}>
         <AnimWrap duration={15} iterationCount='infinite' animName={anim1}>
            <AnimWrap duration={5} iterationCount='infinite' animName={anim2}>
               <CubeWrapper>
                  <FaceRight
                     width={width}
                     height={height}
                     id='right'
                     tranz={tranz}
                     bgc='blue'
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
                        RIGHT
                     </div>
                  </FaceRight>
                  <FaceLeft
                     width={width}
                     height={height}
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
                  <FaceFront
                     width={width}
                     height={height}
                     id='front'
                     bgc='maroon'
                     tranz={tranz}
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
                        FRONT
                     </div>
                  </FaceFront>
                  <FaceTop
                     width={width}
                     height={height}
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
                  <FaceBack
                     width={width}
                     height={height}
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
                  <FaceBottom
                     width={width}
                     height={height}
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
               </CubeWrapper>
            </AnimWrap>
         </AnimWrap>
      </SceneStyle>
   );
};

export default Cube;
