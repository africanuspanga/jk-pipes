import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Products from "./_components/Products";
import Applications from "./_components/Applications";
import WhyChoose from "./_components/WhyChoose";
import FeaturedPVC from "./_components/FeaturedPVC";
import SwahiliCTA from "./_components/SwahiliCTA";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import FloatingWhatsApp from "./_components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Applications />
        <WhyChoose />
        <FeaturedPVC />
        <SwahiliCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
