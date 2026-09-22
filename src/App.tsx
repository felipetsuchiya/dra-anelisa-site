import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Location } from "./components/Location";
import { Testimonials } from "./components/Testimonials";
import { FloatingWhatsApp } from "./components/FloatingWhatsapp";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Location />
      </main>
      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
