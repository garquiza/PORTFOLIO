import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
// import { Achievements } from './features/achievements/Achievements'
import { About } from "./features/about/About";
import { Contact } from "./features/contact/Contact";
import { Hero } from "./features/home/Hero";
import { Projects } from "./features/projects/Projects";
import { Skills } from "./features/skills/Skills";
import { useCleanAnchors } from "./hooks/useCleanAnchors";
import { IntroSplash } from "./components/effects/IntroSplash";
import { ScrollProgress } from "./components/effects/ScrollProgress";

export default function App() {
  useCleanAnchors();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-primary focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <IntroSplash />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        {" "}
        <Hero />
        <About />
        <Projects />
        <Skills />
        {/* <Achievements /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
