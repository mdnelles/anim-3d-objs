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
   const globalStyles: object = {
      // global styles
      border: "1px solid #00f",
      bgc: "#009",
      opac: 0.7,
      bfv: "visible",
      fontFamily: "Cochin",
   };
   const animSpecs: object = {
      anim: "wobX",
      anim2: "wobY",
      anim1duration: 5,
      anim2duration: 11,
      anim1count: "infinte",
      anim1low: "-83",
      anim2hi: "85",
      anim2low: "-81",
      anim2count: "infinite",
   };
   const indivStyles: object = {
      // // face individual styles (over rides global)
      bottom: {
         bfv: "visible",
         opacity: 0.8,
         fontFamily: "Helvetica",
      },
      front: {
         border: "1px solid #f00",
         bgc: "#f00",
         bfv: "visible",
         opacity: 0.5,
         fontFamily: "Arial, Sans",
      },
   };

   return (
      <div style={{ padding: 100 }}>
         <Cuboid
            width={260}
            depth={25}
            height={132}
            animSpecs={animSpecs}
            indivStyles={indivStyles}
            faces={faceprops}
            globalStyles={globalStyles}
            faceType={""}
            tranz={""}
         >
            {}
         </Cuboid>
      </div>
   );
}

export default App;
