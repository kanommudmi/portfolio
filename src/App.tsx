import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import PortfolioPage from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Header from "./components/header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen relative bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Background with stars and gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Placeholder for starry background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stardust.png')",
          }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-70"></div>
      </div>
      <div className="relative z-20">
        <Header />
      </div>
      <main className="relative z-10 container mx-auto px-4 flex-1">
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}

export default App;
