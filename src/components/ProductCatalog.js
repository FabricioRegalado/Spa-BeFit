import React, { useState } from "react";
import { motion } from "framer-motion";

// Lista de productos
const products = [
  { 
    id: 1, 
    name: "Proteína Whey", 
    price: "$50", 
    category: "Proteina", 
    img: "/img/proteina.jpg", 
    description: "Aumenta tu masa muscular con la mejor proteína de suero." 
  },
  { 
    id: 2, 
    name: "Creatina Monohidrato", 
    price: "$30", 
    category: "Creatina", 
    img: "/img/creatina.jpg", 
    description: "Mejora tu rendimiento y fuerza en cada entrenamiento." 
  },
  { 
    id: 3, 
    name: "BCAA Recovery", 
    price: "$25", 
    category: "BCAA", 
    img: "/img/bcaa.jpg", 
    description: "Optimiza la recuperación y reduce la fatiga muscular." 
  },
  { 
    id: 4, 
    name: "Omega 3", 
    price: "$20", 
    category: "Omega", 
    img: "/img/omega3.jpg", 
    description: "Cuida tu salud cardiovascular con Omega 3 puro." 
  },
  { 
    id: 5, 
    name: "Pre Workout", 
    price: "$35", 
    category: "PreWork", 
    img: "/img/prework.jpg", 
    description: "Eleva tu energía y enfoque para entrenar al máximo." 
  },
];

const whatsappNumber = "523412416361";

const ProductCatalog = () => {
  const [filters, setFilters] = useState({
    Proteina: false,
    Creatina: false,
    PreWork: false,
    BCAA: false,
    Omega: false,
    Shaker: false,
  });

  const filteredProducts = products.filter((product) => {
    const categoryFilterActive = Object.values(filters).some((value) => value);
    const matchesCategory = filters[product.category] || !categoryFilterActive;
    return matchesCategory;
  });

  const handleCheckboxChange = (category) => {
    setFilters((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="px-4 py-8">
      {/* Filtros como Toggle Tokens */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 place-items-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {["Proteina", "Creatina", "BCAA", "Omega", "PreWork", "Shaker"].map((category) => (
          <motion.button
            key={category}
            onClick={() => handleCheckboxChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 w-full sm:w-auto
                ${filters[category] ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Tarjetas de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl p-6 text-center shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-lg font-bold mb-2 text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-green-500 font-semibold mb-4">{product.price}</p>
            <motion.a
                href={`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-transform transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                >
                {/* Icono de WhatsApp SVG */}
                <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                >
                    <path d="M12 0C5.372 0 0 5.372 0 12c0 2.091.546 4.046 1.507 5.746L.087 29.496l11.96-3.412A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 01-5.127-1.425l-.338-.216-7.09 2.026 2.036-7.12-.225-.343A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2zm-2.4 5c-.304 0-.75.157-1.086.451-.291.262-.674.822-.807 1.338-.42 1.646-.075 3.192 1.06 4.572l.062.074c.72.901 1.47 1.56 2.273 2.096.773.518 1.615.928 2.598 1.07.664.099 1.184-.06 1.616-.402l.11-.095c.343-.303.457-.793.457-1.102v-1.6a1 1 0 00-.732-.996l-.12-.027-.772-.155a1 1 0 00-.943.27l-.253.257c-.144.144-.33.252-.577.252-.112 0-.32-.107-.559-.332-.376-.349-.782-.812-1.186-1.373-.289-.39-.392-.553-.392-.686 0-.236.13-.432.302-.585l.248-.22.065-.079a1 1 0 00.117-1.105l-.064-.114-.376-.75A1 1 0 009.6 7z" />
                </svg>
                Contactar por WhatsApp
            </motion.a>

          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <motion.p 
          className="text-center text-gray-500 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No se encontraron productos.
        </motion.p>
      )}
    </div>
  );
};

export default ProductCatalog;
