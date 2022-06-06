import Obj from "./components/Obj";

function App() {
   const faceprops = {
      front: true,
      back: false,
      left: false,
      right: true,
      top: false,
      bottom: false,
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
      front: {
         bgc: "#f00",
         border: "2px dashed #aaa",
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
