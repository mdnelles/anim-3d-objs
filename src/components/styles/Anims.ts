import { keyframes } from "styled-components";

interface AllAnimsProps {
   xdegs?: number;
   ydegs?: number;
}

export const allAnims = (props: AllAnimsProps) => {
   const { xdegs = 45, ydegs = 45 } = props;

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
    }`;

   const fadeInkf = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }`;

   const wobY = keyframes`
    0% {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }
    25% {
        -webkit-transform: rotateY(-${ydegs}deg);
        transform: rotateY(-${ydegs}deg);
    }
    75% {
        -webkit-transform: rotateY(${ydegs}deg);
        transform: rotateY(${ydegs}deg);
    }
    100% {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }`;

   const wobX = keyframes`
    0% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
    }
    25% {
        -webkit-transform: rotateX(-${xdegs}deg);
        transform: rotateX(-${xdegs}deg);
    }
    75% {
        -webkit-transform: rotateX(${xdegs}deg);
        transform: rotateX(${xdegs}deg);
    }
    100% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
    }`;
   /* ============================== x-axis 0-180 >180 - 360 */
   const fwdx018 = keyframes`
    from {
        -webkit-transform: rotateX(360deg);
        transform: rotateX(360deg);
    }
    to {
        -webkit-transform: rotateX(180deg);
        transform: rotateX(180deg);
    }`;
   const fwdx1836 = keyframes`
    from {
        -webkit-transform: rotateX(180deg);
        transform: rotateX(180deg);
    }
    to {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
    }`;
   /* ============================= x-axis 0-90, 90-180, 180-270, 270-360 */
   const fwdx09 = keyframes`
    from {
       -webkit-transform: rotateX(360deg);
       transform: rotateX(360deg);
    }
    to {
       -webkit-transform: rotateX(90deg);
       transform: rotateX(90deg);
    }`;
   const fwdx918 = keyframes`
    from {
        -webkit-transform: rotateX(-90deg);
        transform: rotateX(-90deg);
    }
    to {
        -webkit-transform: rotateX(-180deg);
        transform: rotateX(-180deg);
    }`;
   const fwdx1827 = keyframes`
    from {
        -webkit-transform: rotateX(-180deg);
        transform: rotateX(-180deg);
    }
    to {
        -webkit-transform: rotateX(-270deg);
        transform: rotateX(-270deg);
    }`;
   const fwdx2736 = keyframes`
    from {
        -webkit-transform: rotateX(-270deg);
        transform: rotateX(-270deg);
    }
    to {
        -webkit-transform: rotateX(-360deg);
        transform: rotateX(-360deg);
    }`;

   /* ============================== y-axis 0-180 >180 - 360 */
   const fwdy018 = keyframes`
   from {
       -webkit-transform: rotateY(360deg);
       transform: rotateY(360deg);
   }
   to {
       -webkit-transform: rotateY(180deg);
       transform: rotateY(180deg);
   }`;
   const fwdy1836 = keyframes`
   from {
       -webkit-transform: rotateY(180deg);
       transform: rotateY(180deg);
   }
   to {
       -webkit-transform: rotateY(0deg);
       transform: rotateY(0deg);
   }`;

   /* ============================= y-axis 0-90, 90-180, 180-270, 270-360 */
   const fwdy09 = keyframes`
   from {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
   }
   to {
      -webkit-transform: rotateY(90deg);
      transform: rotateY(90deg);
   }`;
   const fwdy918 = keyframes`
   from {
       -webkit-transform: rotateY(-90deg);
       transform: rotateY(-90deg);
   }
   to {
       -webkit-transform: rotateY(-180deg);
       transform: rotateY(-180deg);
   }`;
   const fwdy1827 = keyframes`
   from {
       -webkit-transform: rotateY(-180deg);
       transform: rotateY(-180deg);
   }
   to {
       -webkit-transform: rotateY(-270deg);
       transform: rotateY(-270deg);
   }`;
   const fwdy2736 = keyframes`
   from {
       -webkit-transform: rotateY(-270deg);
       transform: rotateY(-270deg);
   }
   to {
       -webkit-transform: rotateY(-360deg);
       transform: rotateY(-360deg);
   }`;

   return {
      X360,
      Y360,
      fadeInkf,
      wobY,
      wobX,
      fwdx018,
      fwdx1836,
      fwdx09,
      fwdx918,
      fwdx1827,
      fwdx2736,
      fwdy018,
      fwdy1836,
      fwdy09,
      fwdy918,
      fwdy1827,
      fwdy2736,
   };
};
