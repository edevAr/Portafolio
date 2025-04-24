import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
