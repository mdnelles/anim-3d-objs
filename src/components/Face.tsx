import styled from "styled-components";

interface FaceProps {
   id?: string;
   x?: number | string;
   y?: number | string;
   z?: number | string;
   bgc?: string;
   tranz?: number | string;
   deg?: number | string;
   children?: any;
   width?: number | string;
   height?: number | string;
}

export const Face = (props: FaceProps) => {
   const {
      x = 0,
      y = 0,
      z = 0,
      deg = 0,
      id,
      children = "",
      bgc = "#ddd",
      width = 5,
      height = 5,
      tranz = width,
   } = props;
   console.log("ID: " + id + "  >> deg = " + deg);
   const Specs = styled.div`
      position: absolute;
      width: ${width}px;
      height: ${height}px;
      background-color: ${bgc};
      border: 1px dashed #0f0;
      transform: rotate3d(${x}, ${y}, ${z}, ${deg}deg) translateZ(${tranz}px);
      backface-visibility: visible;
   `;

   return (
      <div>
         <Specs>{children}</Specs>
      </div>
   );
};
