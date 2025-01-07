import React from "react";
import ProductCatalog from "./components/ProductCatalog";
import { motion } from "framer-motion";
import logo from "./assets/logo.jpg";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-white shadow-md py-6 rounded-b-3xl mx-auto w-11/12 max-w-6xl"
      >
        <div className="container mx-auto flex flex-col items-center justify-center px-4">
          {/* Logo */}
          <motion.img
            src={logo}
            alt="BE FIT SUPPLEMENTS"
            className="h-20 mb-2 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Título */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-green-600 text-center tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            BE FIT SUPPLEMENTS
          </motion.h1>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        {/* Subtítulo */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800"
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 120 }}
        >
          Descubre nuestros suplementos
        </motion.h2>

        {/* Catálogo de productos */}
        <div>
          <ProductCatalog />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-8 rounded-t-3xl w-full">
        <p className="text-gray-300 text-sm md:text-base mb-2">
          &copy; 2024 BE FIT SUPPLEMENTS. Todos los derechos reservados.
        </p>
        <a
          href="https://www.facebook.com/profile.php?id=61561063378037"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.675 0h-21.35C.595 0 0 .6 0 1.337v21.326C0 23.4.595 24 1.325 24H12.82v-9.294H9.692V11.09h3.128V8.413c0-3.1 1.89-4.787 4.65-4.787 1.325 0 2.462.1 2.788.144v3.24h-1.912c-1.504 0-1.795.715-1.795 1.76v2.31h3.59l-.467 3.615h-3.123V24h6.126c.73 0 1.325-.6 1.325-1.337V1.337C24 .6 23.405 0 22.675 0z" />
          </svg>
          Visítanos en Facebook
        </a>
      </footer>
    </div>
  );
}

export default App;
