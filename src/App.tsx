import Cuboid from "./components/Cuboid";

function App() {
   const faceprops = {
      front: true,
      back: true,
      left: true,
      right: true,
      top: true,
      bottom: true,
   };
   const globalStyles: object = {
      // global styles
      border: "1px solid #00f",
      bgc: "#009",
      opac: 0.9,
      bfv: "visible",
      fontFamily: "Cochin",
   };
   const animSpecs: object = {
      anim1: "Y360",
      anim2: "X360",
      anim1duration: 5,
      anim2duration: 23,
      anim1count: "infinite",
      anim1low: "-120",
      anim2hi: "120",
      anim2low: "-81",
      anim2count: "infinite",
      anim1direction: "normal",
      anim2direction: "normal",
   };

   const indivStyles: object = {
      // // face individual styles (over rides global)
      bottom: {
         bfv: "visible",
         fontFamily: "Helvetica",
      },
      front: {
         border: "1px solid #f00",
         bgc: "#f00",
         bfv: "visible",
         fontFamily: "Arial, Sans",
      },
      left: {
         bgc: "yellow",
      },
      top: {
         bgc: "pink",
      },
      right: {
         bgc: "purple",
      },
      back: {
         border: "1px solid #f00",
         bgc: "#0f0",
         bfv: "visible",
         fontFamily: "Arial, Sans",
      },
   };

   return (
      <div style={{ padding: 150 }}>
         <Cuboid
            width={160}
            depth={260}
            height={92}
            perspectiveOrigin='50% 50%'
            zIndex={10}
            animSpecs={animSpecs}
            indivStyles={indivStyles}
            faces={faceprops}
            globalStyles={globalStyles}
         >
            {}
         </Cuboid>
         <div style={{ padding: 5 }} />
      </div>
   );
}

export default App;
