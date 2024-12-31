import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default App;
