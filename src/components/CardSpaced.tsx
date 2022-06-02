import styled from "styled-components";
import FaceFront from "./Faces/FaceFront";
import FaceBack from "./Faces/FaceBack";
import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";

interface CardSpacedProps {
   anim1?: string;
   anim2?: string;
   border?: string;
   width?: number;
   height?: number | string;
   depth?: number;
}

const CardSpacedWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   transform-style: preserve-3d;
`;

const CardSpaced = (props: CardSpacedProps) => {
   const {
      anim1 = "",
      anim2 = "",
      width = 5,
      height = 5,
      depth = 5,
      border = "",
   } = props;
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
               <CardSpacedWrapper>
                  <FaceFront
                     width={width}
                     height={height}
                     depth={depth}
                     id='front'
                     bgc='blue'
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
               </CardSpacedWrapper>
            </AnimWrap>
         </AnimWrap>
      </SceneStyle>
   );
};

export default CardSpaced;
