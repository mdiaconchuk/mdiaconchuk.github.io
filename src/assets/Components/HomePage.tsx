import Hero from "./Hero";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import WorkSection from "./Sections/Works/WorkSection";

function HomePage() {
  return (
    <>
    <Hero />
    <WorkSection />
    <About />
    </>
  );
}

export default HomePage;
