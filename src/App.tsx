import React from "react";
import styled from "styled-components";

import "./App.css";
import Box from "./components/Box";
import Card from "./components/Card";

const size: number = 200;

function App() {
   return (
      <div style={{ padding: 200 }}>
         <Box anim1='x360' anim2='yy360' />
      </div>
   );
}

export default App;
