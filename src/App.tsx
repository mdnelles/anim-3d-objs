import React from "react";
import styled from "styled-components";

//import "./App.css";
import Box from "./components/Box";
import Card from "./components/Card";

const size: number = 200;

function App() {
   return (
      <div style={{ padding: 200 }}>
         Card
         <Card anim1='X360' anim2='Y360' width={200} height={200} />
      </div>
   );
}

export default App;
