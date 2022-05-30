import CardSpaced from "./components/CardSpaced";
import Cuboid from "./components/Cuboid";
import Slab from "./components/Slab";

const size: number = 200;

function App() {
   return (
      <div style={{ padding: 200 }}>
         <CardSpaced
            anim1='X360'
            anim2='Y360'
            width={230}
            height={300}
            depth={1}
            border='1px solid #fff'
         />
      </div>
   );
}

export default App;
