import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
