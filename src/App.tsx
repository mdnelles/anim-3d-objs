import React from "react";
import styled from "styled-components";

//import "./App.css";
import Box from "./components/Box";
import Card from "./components/Card";
import Cube from "./components/Cube";

const size: number = 200;

function App() {
   return (
      <div style={{ padding: 200 }}>
         <Cube
            anim1='X360'
            anim2='Y360'
            width={100}
            height={100}
            border='1px solid #fff'
         />
      </div>
   );
}

export default App;
