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

function currentRoute() {
  if (window.location.hash === "#payment-confirmation") return "payment-confirmation";
  if (window.location.hash === "#intake") return "intake";

  const basePath = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = window.location.pathname.replace(basePath, "") || "/";

  if (path === "/payment-confirmation") return "payment-confirmation";
  if (path === "/intake") return "intake";
  return "home";
}

export default function App() {
  const route = currentRoute();

  if (route === "payment-confirmation") {
    return <PaymentConfirmation />;
  }

  if (route === "intake") {
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
