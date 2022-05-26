import styled from "styled-components";

const size: number = 200;

export const SceneStyle: any = styled.div`
   width: ${size}px;
   height: ${size}px;
   perspective: 600px;
   perspective-origin: 50% 50%;
`;

export const CubeStyle: any = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   transform-style: preserve-3d;
`;
