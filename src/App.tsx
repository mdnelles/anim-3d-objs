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
      anim1: "Y360",
      anim2: "",
      anim1duration: 5,
      anim2duration: 3,
      anim1count: "infinite",
      anim1low: "-120",
      anim2hi: "120",
      anim2low: "-81",
      anim2count: "infinite",
      anim1direction: "normal",
      anim2direction: "normal",
   };
   const animSpecs2: object = {
      anim1: "Y360",
      anim2: "",
      anim1duration: 5,
      anim2duration: 3,
      anim1count: "infinite",
      anim1low: "-120",
      anim2hi: "120",
      anim2low: "-81",
      anim2count: "infinite",
      anim1direction: "reverse",
      anim2direction: "reverse",
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
            perspectiveOrigin='50% 130%'
            zIndex={10}
            animSpecs={animSpecs}
            indivStyles={indivStyles}
            faces={faceprops}
            globalStyles={globalStyles}
         >
            {}
         </Cuboid>
         <div style={{ padding: 10 }} />
         <Cuboid
            width={260}
            depth={260}
            height={52}
            perspectiveOrigin='50% 50%'
            zIndex={1}
            animSpecs={animSpecs2}
            indivStyles={indivStyles}
            faces={faceprops}
            globalStyles={globalStyles}
         >
            {}
         </Cuboid>
         <div style={{ padding: 10 }} />
         <Cuboid
            width={260}
            depth={260}
            height={92}
            perspectiveOrigin='50% -50%'
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
