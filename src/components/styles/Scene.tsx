import styled from "styled-components";

interface SceneStyleProps {
   size?: number | string;
   children: any;
}

export const SceneStyle = (props: SceneStyleProps) => {
   const { size = 0, children = "" } = props;
   console.log("---size: " + size);

   const SceneStyleDiv: any = styled.div`
      width: ${size}px;
      height: ${size}px;
      perspective: 600px;
      perspective-origin: 50% 50%;
      border: "3px solid #900";
      background-color: "pink";
      padding: 5px;
   `;
   console.log("SceneStyleDiv");
   console.log(SceneStyleDiv);
   return (
      <>
         <SceneStyleDiv>{children}</SceneStyleDiv>
      </>
   );
};
