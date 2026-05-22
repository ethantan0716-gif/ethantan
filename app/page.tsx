import Header from "./components/Header";
import Hero from "./components/Hero";
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
        <Projects />
        <Gallery />
        <Services />
      </main>
      <Footer />
    </>
  );
}
