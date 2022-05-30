import styled from "styled-components";

interface SceneStyleProps {
   width?: number | string;
   height?: number | string;
   children: any;
}

export const SceneStyle = (props: SceneStyleProps) => {
   const { width = 0, height = 0, children = "" } = props;

   const SceneStyleDiv: any = styled.div`
      width: ${width}px;
      height: ${height}px;
      perspective: 600px;
      perspective-origin: 50% 50%;
   `;

   return (
      <>
         <SceneStyleDiv>{children}</SceneStyleDiv>
      </>
   );
};
