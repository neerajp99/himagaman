import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Projects"

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

  },
  []);
  return (
    <div className="App">
      <Header />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;
