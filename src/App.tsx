import Cuboid from "./components/Cuboid";
import Slab from "./components/Slab";

const size: number = 200;

function App() {
   const faceprops = {
      front: true,
      back: true,
      left: false,
      right: false,
      top: true,
      bottom: true,
   };
   const globalStyles = {
      border: "1px solid #fff",
      bgc: "blue",
      opacity: 0.5,
   };
   return (
      <div style={{ padding: 200 }}>
         <Slab
            anim1='X360'
            anim2='Y360'
            width={100}
            depth={25}
            height={300}
            border='1px solid #fff'
            faces={faceprops}
            globalStyles={globalStyles}
         />
      </div>
   );
}

export default App;
