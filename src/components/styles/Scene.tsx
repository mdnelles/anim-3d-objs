import styled from "styled-components";

interface SceneStyleProps {
   size?: number | string;
   children: any;
}

export const SceneStyle = (props: SceneStyleProps) => {
   const { size = 0, children = "" } = props;

   const SceneStyleDiv: any = styled.div`
      width: ${size}px;
      height: ${size}px;
      perspective: 600px;
      perspective-origin: 50% 50%;
   `;

   return (
      <>
         <SceneStyleDiv>{children}</SceneStyleDiv>
      </>
   );
};
