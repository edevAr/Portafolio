import React from "react";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <section className="max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-4">Tecnologías</h2>
      <motion.ul className="list-disc list-inside space-y-1">
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <strong>Lenguajes y frameworks:</strong> Java EE/SE, C#, .NET, ASP.NET,
          Spring Boot, Node.js, React, Angular, Next.js
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <strong>Mobile:</strong> Experiencia en desarrollo de apps móviles
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <strong>Cloud & DevOps:</strong> AWS (ECS, S3), Git, Bitbucket
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <strong>Herramientas:</strong> Visual Studio, VS Code, IntelliJ IDEA, Jira,
          Trello
        </motion.li>
      </motion.ul>
    </section>
  );
}
