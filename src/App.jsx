import React from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import CodingProfile from "./component/CodingProfile";
import Skills from "./component/Skills";
import Certification from "./component/Certification";
import Education from "./component/Education";
import Work from "./component/Work";
import Footer from "./component/Footer";
import About from "./component/About";
import Projects from "./component/Projects";
import Contacts from "./component/Contacts";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      {/* Toast */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#18181B",
            color: "#fff",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "12px",
          },
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-28">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Certification />
        <Projects />
        <CodingProfile />
        <Education />
        <Contacts />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
