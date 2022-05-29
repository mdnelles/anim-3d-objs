import Cuboid from "./components/Cuboid";

const size: number = 200;

function App() {
   return (
      <div style={{ padding: 200 }}>
         <Cuboid
            anim1='X360'
            anim2='Y360'
            width={100}
            height={250}
            border='1px solid #fff'
         />
      </div>
   );
}

export default App;
