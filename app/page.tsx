import Nav from "./components/nav";
import Hero from "./components/hero";
import Product from "./components/product";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <Hero />
      <Product />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
