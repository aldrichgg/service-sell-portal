
import { motion } from "framer-motion";

export const GuaranteeSection = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src="/public/lovable-uploads/922c4fa6-4122-4441-bb5c-e77f582c6bcd.png"
            alt="7 dias garantia"
            className="w-64 h-auto"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-700">
            Você 100% satisfeito ou seu dinheiro de volta.
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Se durante os 7 primeiros dias após comprar seguidores você
            não estiver totalmente satisfeito, devolveremos todo o valor
            investido. Sem pegadinha, sem central de atendimento.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
