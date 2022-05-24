import React from "react";
import "./App.css";
import Biografia from "./components/Biografia/Biografia";
import GridComponente from "./components/GridFotos/GridComponente";
import Header from "./components/Header/Header";
import Sobre from "./components/Sobre/Sobre";
import Um from "./components/Um/Um";

function App() {
  return (
    <>
      <Header />
      <Biografia />
      <Sobre />
      <Um />
      <GridComponente />
    </>
  );
}

export default App;
