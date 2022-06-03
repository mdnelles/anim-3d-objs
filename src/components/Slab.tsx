import styled from "styled-components";
import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";
import { FaceControl } from "./Faces/FaceControl";

interface SlabProps {
   anim1?: string;
   anim2?: string;
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
   tranz?: any;
}

const SlabWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   transform-style: preserve-3d;
`;

const Slab = (props: SlabProps) => {
   const {
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

   const {
      DoFaceRight,
      DoFaceLeft,
      DoFaceFront,
      DoFaceTop,
      DoFaceBack,
      DoFaceBottom,
   } = FaceControl(tmp);
   return (
      <SceneStyle width={width} height={height}>
         <AnimWrap duration={15} iterationCount='infinite' animName={anim1}>
            <AnimWrap duration={5} iterationCount='infinite' animName={anim2}>
               <SlabWrapper>
                  {DoFaceRight()}
                  {DoFaceLeft()}
                  {DoFaceFront()}
                  {DoFaceTop()}
                  {DoFaceBack()}
                  {DoFaceBottom()}
               </SlabWrapper>
            </AnimWrap>
         </AnimWrap>
      </SceneStyle>
   );
};

export default Slab;
