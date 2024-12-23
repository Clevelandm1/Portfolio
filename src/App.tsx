import { motion } from "motion/react";
import "./App.css";
import Sketch from "./p5/sketchTest";
import { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/pages/homePage";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
