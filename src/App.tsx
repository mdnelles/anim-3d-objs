import Cuboid from "./components/Cuboid";
import Slab from "./components/Slab";

const size: number = 200;

function App() {
   const faceprops = {
      front: true,
      back: false,
      left: true,
      right: false,
      top: false,
      bottom: false,
   };
   const faceGlobalStyles = {
      border: "1px solid #fff",
      bgc: "blue",
      opacity: 0.9,
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
            faceGlobalStyles={faceGlobalStyles}
         />
      </div>
   );
}

export default App;
