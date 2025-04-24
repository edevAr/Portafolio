import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-4">Proyectos destacados</h2>

      <motion.div
        className="bg-white p-4 rounded shadow mb-4"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl font-bold">Plataforma de gestión académica</h3>
        <p>
          <strong>Rol:</strong> Technical Lead
        </p>
        <p>
          <strong>Stack:</strong> Spring Boot, Angular, AWS ECS, PostgreSQL
        </p>
        <p className="mt-2">
          Diseño de arquitectura desde cero, implementación de microservicios,
          despliegue en contenedores y CI/CD. Coordinación de equipo de 6
          desarrolladores.
        </p>
        <p className="mt-1 text-green-700 font-medium">
          Logro clave: Reducción del tiempo de entrega de funcionalidades en un 40%
          mediante mejoras de proceso y automatización.
        </p>
      </motion.div>

      {/* Puedes agregar más proyectos aquí siguiendo este formato */}
    </section>
  );
}
