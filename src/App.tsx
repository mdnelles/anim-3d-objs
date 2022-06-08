import Cuboid from "./components/Cuboid";

function App() {
   const faceprops = {
      front: true,
      back: false,
      left: true,
      right: true,
      top: true,
      bottom: true,
   };
   const fgStyles: object = {
      // global styles
      border: "1px solid #111",
      bgc: "#555",
      opac: 0.7,
      bfv: "visible",
      fontFamily: "Cochin",
   };
   const indivStyles: object = {
      // // face individual styles (over rides global)
      bottom: {
         border: "2px dashed #aaa",
         bfv: "visible",
         opacity: 0.8,
         fontFamily: "Helvetica",
      },
      front: {
         bgc: "#ddd",
         border: "1px dashed #aaa",
         bfv: "visible",
         opacity: 0.5,
         fontFamily: "Arial, Sans",
      },
   };

   return (
      <div style={{ padding: 100 }}>
         <Cuboid
            anim1='wobY'
            anim2='wobX'
            anim1duration={5}
            anim2duration={18}
            width={260}
            depth={25}
            height={132}
            indivStyles={indivStyles}
            faces={faceprops}
            fgStyles={fgStyles}
            faceType={""}
            tranz={""}
         >
            {}
         </Cuboid>
      </div>
   );
}

export default App;
