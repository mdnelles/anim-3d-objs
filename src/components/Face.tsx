import styled from "styled-components";

interface FaceProps {
   id?: string | number;
   x?: number | string;
   y?: number | string;
   z?: number | string;
   bgc?: string;
   tranz?: number | string;
   deg?: number | string;
   children?: any;
}

export const Face = (props: FaceProps) => {
   const {
      x = 0,
      y = 0,
      z = 0,
      deg = 0,
      children = "",
      tranz = 0,
      bgc = "#ddd",
   } = props;
   const Specs = styled.div`
      position: absolute;
      width: 100px;
      height: 100px;
      background-color: ${bgc};
      border: #333;
      transform: rotate3d(${x}, ${y}, ${z}, ${deg}deg) translateZ(${tranz}px);
      backface-visibility: visible;
   `;

   return (
      <div>
         <Specs>{children}</Specs>
      </div>
   );
};
