import Obj from "./components/Obj";

function App() {
   const faceprops = {
      front: true,
      back: false,
      left: false,
      right: false,
      top: false,
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
   const inStyles: object = {
      // // face individual styles (over rides global)
      bottom: {
         bgc: "#f00",
         border: "2px dashed #aaa",
         bfv: "visible",
         opacity: 0.3,
         fontFamily: "Helvetica",
      },
      front: {
         bgc: "#0f0",
         border: "1px dashed #aaa",
         bfv: "visible",
         opacity: 0.5,
         fontFamily: "Arial, Sans",
      },
   };

   return (
      <div style={{ padding: 100 }}>
         <Obj
            anim1='X360'
            anim2='Y360'
            width={260}
            depth={65}
            height={132}
            inStyles={inStyles}
            faces={faceprops}
            fgStyles={fgStyles}
            faceType={""}
            tranz={""}
         >
            {}
         </Obj>
      </div>
   );
}

export default App;
