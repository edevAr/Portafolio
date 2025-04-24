import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      <motion.ul
        className="list-inside space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <strong>Email:</strong> edenarielguzmanandia@gmail.com
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <strong>Teléfono:</strong> +591 69491366
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/edenariel"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/edenariel
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/edenariel"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/edenariel
          </a>
        </motion.li>
      </motion.ul>
    </section>
  );
}
