import Cuboid from "./components/Cuboid";
import Slab from "./components/Slab";

const size: number = 200;

function App() {
   return (
      <div style={{ padding: 200 }}>
         <Slab
            anim1='X360'
            anim2='Y360'
            width={100}
            height={300}
            depth={25}
            border='1px solid #fff'
         />
      </div>
   );
}

export default App;
