import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="technical-grid">
        <Hero />
        <Skills />
        <Projects />
        <Gallery />
        <Services />
      </main>
      <Footer />
    </>
  );
}
