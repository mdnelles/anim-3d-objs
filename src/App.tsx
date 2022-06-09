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
      opac: 1,
      bfv: "visible",
      fontFamily: "Cochin",
   };
   const animSpecs: object = {
      anim: "wobX",
      anim2: "wobY",
      anim1duration: 5,
      anim2duration: 10,
      anim1count: "infinte",
      anim1low: "-120",
      anim2hi: "120",
      anim2low: "-81",
      anim2count: "infinite",
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
      back: {
         border: "1px solid #f00",
         bgc: "#f00",
         bfv: "visible",
         fontFamily: "Arial, Sans",
      },
   };

   return (
      <div style={{ padding: 100 }}>
         <Cuboid
            width={260}
            depth={260}
            height={92}
            perspectiveOrigin='50% 150%'
            zIndex={10}
            animSpecs={animSpecs}
            indivStyles={indivStyles}
            faces={faceprops}
            globalStyles={globalStyles}
         >
            {}
         </Cuboid>
         <div style={{ padding: 20 }} />
         <Cuboid
            width={260}
            depth={260}
            height={52}
            perspectiveOrigin='50% 50%'
            zIndex={1}
            animSpecs={animSpecs}
            indivStyles={indivStyles}
            faces={faceprops}
            globalStyles={globalStyles}
         >
            {}
         </Cuboid>
         <div style={{ padding: 20 }} />
         <Cuboid
            width={260}
            depth={260}
            height={92}
            perspectiveOrigin='50% -120%'
            zIndex={1}
            animSpecs={animSpecs}
            indivStyles={indivStyles}
            faces={faceprops}
            globalStyles={globalStyles}
         >
            {}
         </Cuboid>
      </div>
   );
}

export default App;
