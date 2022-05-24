import React from "react";
import "./App.css";
import Biografia from "./components/Biografia/Biografia";
import Header from "./components/Header/Header";
import Sobre from "./components/Sobre/Sobre";

function App() {
  return (
    <>
      <Header />
      <Biografia />
      <Sobre />
    </>
  );
}

export default App;
