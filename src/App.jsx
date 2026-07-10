import React from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import CodingProfile from "./component/CodingProfile";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Work from "./component/Work";
import Footer from "./component/Footer";
import About from "./component/About";
import Projects from "./component/Projects";
import Contacts from "./component/Contacts";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#09090B] text-[#d4d4d8]">
      {/* Toast */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#181818",
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
        {/* Hero */}
        <Hero />
        {/* Main Sections */}
        <div className="space-y-28 md:space-y-36">
          <About />
          <Skills />
          <Work />
          <Projects />
          <CodingProfile />
          <Education />
          <Contacts />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;