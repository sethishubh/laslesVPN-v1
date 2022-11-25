import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Plans from "./components/Plans";
import Mapglobal from "./components/Mapglobal";
import Carousel from "./components/Carousel";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Navbar />
        <Hero />
      </header>
      <main>
        <Stats />
        <Features />
        <Plans />
        <Mapglobal />
        <Carousel />
        <Subscription />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
