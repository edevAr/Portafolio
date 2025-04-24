import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-4xl mx-auto my-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
      <p>
        Soy un desarrollador de software con más de 10 años de experiencia,
        especializado en la creación de aplicaciones escalables y soluciones
        innovadoras. Me apasiona aprender nuevas tecnologías y liderar equipos de
        desarrollo.
      </p>
    </motion.section>
  );
}
