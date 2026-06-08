
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoadingAnimation from "./components/LoadingAnimation";
import ErrorBoundary from "./components/ErrorBoundary";
import { LanguageProvider } from "./contexts/LanguageContext";

// Below-the-fold sections are code-split so the initial bundle only has
// to ship what's needed to paint the hero.
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact.jsx"));

function AppContent() {
  return (
    <>
      {/* Loading Animation */}
      <LoadingAnimation />

      <div className="fixed -z-10 min-h-screen w-full bg-gray-900"></div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Education />
          <Experience />
          <Tech />
          <Projects />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App
