import Hero from "./components/Hero";
import Services from "./components/Services";
import Works from "./components/Works";
import Mechanism from "./components/Mechanism";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <Hero />
        <Services />
        <Works />
        <Mechanism />
        <Footer />
      </section>
    </>
  );
}

export default App;
