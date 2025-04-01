import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="p-4 space-y-10 max-w-6xl mx-auto">
      <section className="text-center space-y-4">
        <motion.h1 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Acción Financiera
        </motion.h1>
        <motion.p className="text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Intermediarios autorizados de Skandia para ayudarte a invertir, proteger y planear tu futuro financiero.
        </motion.p>
        <button className="text-lg px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">Agenda tu asesoría gratuita</button>
      </section>
    </div>
  );
}
