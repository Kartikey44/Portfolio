import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [page, setPage] = useState("hero");

  const pages = {
    hero: <Hero />,
    about: <About />,
    work: <Work />,
    skills: <Skills />,
    certification: <Certification />,
    projects: <Projects />,
    coding: <CodingProfile />,
    education: <Education />,
    contact: <Contacts />,
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
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

      <Navbar page={page} setPage={setPage} />

      <main className="pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.98,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 1.02,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
          >
            {pages[page]}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
