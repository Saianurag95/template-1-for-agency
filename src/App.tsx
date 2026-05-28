import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProofBand from "./components/ProofBand";
import Services from "./components/Services";
import DemoShowcase from "./components/DemoShowcase";
import Packages from "./components/Packages";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import BookingCTA from "./components/BookingCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProofBand />
      <Services />
      <DemoShowcase />
      <Packages />
      <Process />
      <Portfolio />
      <BookingCTA />
      <Contact />
      <Footer />
    </div>
  );
}
