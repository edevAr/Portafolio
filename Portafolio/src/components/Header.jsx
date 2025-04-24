import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="my-12 flex items-center justify-start space-x-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Foto */}
      <motion.img
        src="/path/to/your/photo.jpg" // Reemplaza con la ruta de tu foto
        alt="Eden Ariel Guzman Andia"
        className="w-30 h-30 rounded-full border-4 border-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      {/* Información */}
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">
          Eden Ariel Guzman Andia
        </h1>
        <p className="text-xl text-gray-500">Senior Technical Lead | Software Engineer</p>
        <p className="mt-4 text-gray-600">
          Soy un apasionado desarrollador de software con más de 10 años de experiencia, liderando equipos y creando soluciones innovadoras.
        </p>
        <div className="mt-6 flex justify-start gap-6">
          <a
            href="https://github.com/edenariel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="https://tu-blog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            Blog
          </a>
          <a
            href="/cv/EdenArielGuzmanAndia_CV.pdf"
            download
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </motion.header>
  );
}
