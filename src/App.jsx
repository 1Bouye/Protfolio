
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LoadingAnimation from "./components/LoadingAnimation";
import ErrorBoundary from "./components/ErrorBoundary";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

function AppContent() {
  const { language } = useLanguage();
  
  return (
    <>
      {/* Loading Animation */}
      <LoadingAnimation />
      
      <div className="fixed -z-10 min-h-screen w-full bg-gray-900"></div>
      
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Tech />
        <Projects />
        <Contact />
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
