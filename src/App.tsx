import Obj from "./components/Obj";

function App() {
   const faceprops = {
      front: true,
      back: true,
      left: true,
      right: true,
      top: true,
      bottom: true,
   };
   const fgStyles = {
      border: "1px solid #111",
      bgc: "#333",
      opac: 0.9,
      bfv: "visible",
      fontFamily: "Cochin",
   };
   return (
      <div style={{ padding: 100 }}>
         <Obj
            anim1='X360'
            anim2='Y360'
            width={160}
            depth={25}
            height={332}
            faces={faceprops}
            fgStyles={fgStyles}
            faceType={""}
            styles={undefined}
            tranz={""}
         >
            {}
         </Obj>
      </div>
   );
}

export default App;
