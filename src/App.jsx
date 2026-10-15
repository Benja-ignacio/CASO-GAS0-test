import { useCallback, useState } from "react";
import { CartProvider } from "./components/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Services from "./components/Services";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SearchModal from "./components/SearchModal";

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  return (
    <CartProvider>
      <div className="relative w-full min-h-screen flex flex-col">
        <Navbar onOpenSearch={() => setSearchOpen(true)} />
        <main className="w-full flex-1 pt-16">
          <Hero />
          <FeaturedProducts />
          <Services />
          <About />
          <Faq />
        </main>
        <Footer />
      </div>

      <CartDrawer />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </CartProvider>
  );
}

export default App;
