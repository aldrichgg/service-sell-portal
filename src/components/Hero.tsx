
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import phoneImage from "/public/lovable-uploads/4fecf719-b69c-4821-8331-a4d03f50033a.png";

export const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Comprar Seguidores no Instagram <span className="text-purple-700">Reais e Brasileiros</span>
          </h1>
          
          <p className="text-lg text-gray-700">
            Crescer no Instagram é difícil e demorado? <span className="font-bold">Não mais!</span> O 
            ImpulsioneGram é o melhor site para você <span className="text-purple-700 font-semibold">comprar seguidores 
            reais e brasileiros</span>, em poucos cliques.
          </p>
          
          <motion.a
            href="#pacotes"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-purple-700 text-white font-medium py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            Comprar Seguidores Agora
          </motion.a>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center text-gray-700">
              <Check className="w-5 h-5 text-purple-700 mr-2" />
              <span className="text-sm">100% SEGURO E SIGILOSO</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Check className="w-5 h-5 text-purple-700 mr-2" />
              <span className="text-sm">SEM PEDIR SENHA</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Check className="w-5 h-5 text-purple-700 mr-2" />
              <span className="text-sm">SUPORTE HUMANIZADO</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Check className="w-5 h-5 text-purple-700 mr-2" />
              <span className="text-sm">REPOSIÇÃO GARANTIDA</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <img
            src={phoneImage}
            alt="Instagram profile on phone"
            className="w-full h-auto max-w-md mx-auto"
          />
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-purple-700 text-4xl font-bold mb-2">+65M</h3>
            <p className="text-gray-700">De seguidores entregues</p>
          </motion.div>
        </div>
        
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-purple-700 text-4xl font-bold mb-2">+947K</h3>
            <p className="text-gray-700">Pedidos para nossos clientes</p>
          </motion.div>
        </div>
        
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex justify-center items-center mb-2">
              <span className="text-yellow-400 text-4xl mr-2">★</span>
              <span className="text-purple-700 text-4xl font-bold">4.9</span>
            </div>
            <p className="text-gray-700">Avaliação de 65.495 clientes</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
