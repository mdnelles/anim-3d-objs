import Cuboid from "./components/Cuboid";
import Slab from "./components/Slab";

const size: number = 200;

function App() {
   const faceprops = {
      front: true,
      back: false,
      left: true,
      right: true,
      top: false,
      bottom: false,
   };
   const globalStyles = {
      border: "1px solid #fff",
      bgc: "blue",
      opacity: 0.9,
   };
   return (
      <div style={{ padding: 200 }}>
         <Slab
            anim1='X360'
            anim2='Y360'
            width={330}
            depth={150}
            height={332}
            border='1px solid #fff'
            faces={faceprops}
            globalStyles={globalStyles}
         />
      </div>
   );
}

export default App;
