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
      border: 1px solid #900;
      padding: 5px;
   `;

   return (
      <>
         <SceneStyleDiv>{children}</SceneStyleDiv>
      </>
   );
};
