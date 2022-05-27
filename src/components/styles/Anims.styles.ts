import styled, { keyframes } from "styled-components";

/////////// spinX
const spinX = keyframes`
   from {
      -webkit-transform: rotateX(360deg);
      transform: rotateX(360deg);
   }
   to {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
   }
}`;

//////// spinY
const spinY = keyframes`
   from {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
   }
   to {
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
   }
`;

interface AnimStylesProps {
   duration?: number | string;
   iterationCount?: number | string;
   animName?: string;
   fillMode?: string;
}

export const Anim = (props: AnimStylesProps) => {
   const {
      duration = 0,
      iterationCount = 0,
      animName = "noAnim",
      fillMode = "forward",
   } = props;
   const AnimWrap: string = styled.div`
      -webkit-animation-duration: ${duration}s;
      animation-duration: ${duration}s;
      -webkit-animation-iteration-count: ${iterationCount};
      animation-iteration-count: ${iterationCount};
      -webkit-animation-name: ${animName};
      animation-name: ${animName};
      -webkit-animation-fill-mode: ${fillMode};
      animation-fill-mode: ${fillMode};
   `;
};
