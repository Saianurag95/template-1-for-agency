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
import IntakePage from "./components/IntakePage";
import PaymentConfirmation from "./components/PaymentConfirmation";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  if (window.location.hash === "#payment-confirmation" || window.location.pathname === "/payment-confirmation") {
    return <PaymentConfirmation />;
  }

  if (window.location.pathname === "/intake") {
    return <IntakePage />;
  }

  return (
    <div className="min-h-screen">
      <ScrollReveal />
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
