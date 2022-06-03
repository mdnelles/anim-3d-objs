import Cuboid from "./components/Cuboid";
import Slab from "./components/Slab";

const size: number = 200;

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
      border: "1px solid #fff",
      bgc: "blue",
      opac: 0.4,
   };
   return (
      <div style={{ padding: 200 }}>
         <Slab
            anim1='X360'
            anim2='Y360'
            width={160}
            depth={330}
            height={332}
            faces={faceprops}
            fgStyles={fgStyles}
         />
      </div>
   );
}

export default App;
