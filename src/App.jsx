import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";

const categories = [
  {
    slug: "sarees",
    title: "Sarees",
    eyebrow: "01 / The Classic Drape",
    description:
      "Designer drapes with refined detailing, graceful silhouettes and timeless Indian character."
  },
  {
    slug: "kurtis",
    title: "Kurtis",
    eyebrow: "02 / Everyday Elegance",
    description:
      "Elegant kurtis created for comfortable everyday styling with a polished boutique finish."
  },
  {
    slug: "lehengas",
    title: "Lehengas",
    eyebrow: "03 / Occasion Edit",
    description:
      "Statement lehengas for weddings, celebrations and unforgettable festive moments."
  },
  {
    slug: "cordsets",
    title: "Cordsets",
    eyebrow: "04 / Coordinated Style",
    description:
      "Modern coordinated sets that balance effortless comfort with designer detailing."
  },
  {
    slug: "dresses",
    title: "Dresses",
    eyebrow: "05 / Contemporary Edit",
    description:
      "Sophisticated dresses blending graceful Indian inspiration with modern silhouettes."
  },
  {
    slug: "western-wear",
    title: "Western Wear",
    eyebrow: "06 / Modern Wardrobe",
    description:
      "Contemporary western looks designed for confident, polished everyday styling."
  }
];

export default function App() {
  return (
    <div className="app-shell">

      <Navbar />

      <main>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/collections"
            element={<Collections />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {categories.map((category) => (
            <Route
              key={category.slug}
              path={`/collections/${category.slug}`}
              element={
                <CategoryPage category={category} />
              }
            />
          ))}

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}