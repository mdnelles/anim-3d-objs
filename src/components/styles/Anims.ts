import { keyframes } from "styled-components";

export const allAnims = () => {
   const X360 = keyframes`
   from {
      -webkit-transform: rotateX(360deg);
      transform: rotateX(360deg);
   }
   to {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
   }
}`;

   //////// Y360
   const Y360 = keyframes`
   from {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
   }
   to {
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
   }
`;
   return {
      X360,
      Y360,
   };
};
