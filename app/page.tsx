import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";

export default function Home() {
    return (
        <main className="bg-[#121212]">
            <Navbar />

            {/* Hero Scrollytelling Section */}
            <div className="relative">
                <ScrollyCanvas>
                    <Overlay />
                </ScrollyCanvas>
            </div>

            {/* Detailed Content */}
            <div className="relative z-20 space-y-0">
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Education />
            </div>

            <Footer />
        </main>
    );
}
// app/page.tsx   (only create ONE of the two blocks below)

// ------------- SIMPLE REACT COMPONENT -------------
import React from 'react';

const Home = () => {
  return (
    <main>
      <h1>Hello from Vercel! 🎉</h1>
      {/* put your other UI here */}
    </main>
  );
};

export default Home;   // <-- THIS EXPORT IS REQUIRED
