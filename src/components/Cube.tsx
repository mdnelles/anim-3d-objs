import styled from "styled-components";
import FaceFront from "./Faces/FaceFront";
import FaceLeft from "./Faces/FaceLeft";
import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";

const size: number = 200;

interface CubeProps {
   anim1?: string;
   anim2?: string;
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
   const { anim1 = "", anim2 = "", width = 5, height = 5 } = props;
   console.log("App.tsx > anim1 = " + anim1);
   return (
      <SceneStyle size={size}>
         <AnimWrap duration={5} iterationCount='infinite' animName={anim1}>
            <AnimWrap duration={5} iterationCount='infinite' animName={anim2}>
               <CubeWrapper>
                  <FaceFront
                     width={width}
                     height={height}
                     id='front'
                     bgc='pink'
                     tranz={100}
                     opacity={0.5}
                  >
                     frt
                  </FaceFront>
                  <FaceLeft
                     width={width}
                     height={height}
                     id='left'
                     tranz={100}
                     bgc='yellow'
                     opacity={0.5}
                  >
                     lef
                  </FaceLeft>
               </CubeWrapper>
            </AnimWrap>
         </AnimWrap>
      </SceneStyle>
   );
};

export default Cube;
