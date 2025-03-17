
import { motion } from "framer-motion";
import { Heart, Eye, Flag, Rocket, Check, RotateCw, HelpCircle, Package } from "lucide-react";
import { useState } from "react";

interface PlanProps {
  name: string;
  followers: number;
  likes: number;
  views: number;
  price: number;
  oldPrice?: number;
  installments?: string;
  isPopular?: boolean;
}

export const PricingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const plans: PlanProps[] = [
    {
      name: "Piloto",
      followers: 100,
      likes: 50,
      views: 0,
      price: 8.9,
    },
    {
      name: "Essencial",
      followers: 250,
      likes: 100,
      views: 100,
      price: 19.9,
      oldPrice: 32,
      installments: "2x de R$9,95 sem juros no cartão",
    },
    {
      name: "Iniciante",
      followers: 500,
      likes: 250,
      views: 250,
      price: 39.9,
      oldPrice: 49,
      installments: "3x de R$13,30 sem juros no cartão",
    },
    {
      name: "Básico",
      followers: 1000,
      likes: 750,
      views: 750,
      price: 77,
      oldPrice: 94,
      installments: "3x de R$25,67 sem juros no cartão",
      isPopular: true,
    },
  ];

  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + plans.length) % plans.length);
  };

  return (
    <div className="bg-purple-50 py-16" id="pacotes">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha a <span className="text-purple-700">melhor oferta</span> para crescer o seu Instagram <span className="text-purple-700">agora</span>
          </h2>
          
          <div className="inline-flex items-center bg-orange-100 rounded-full px-4 py-2 text-orange-800 font-medium mt-4">
            <span className="mr-2">12:33</span>
            <span>Ofertas por tempo limitado!</span>
          </div>
        </motion.div>

        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>

        {/* Mobile view */}
        <div className="md:hidden relative">
          <div className="flex justify-center">
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full max-w-xs"
            >
              <PlanCard plan={plans[currentIndex]} />
            </motion.div>
          </div>
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6D28D9" strokeWidth="2"/>
                <path d="M8 12L11 15L16 9" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-700">Seguidores Reais e Brasileiros</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 9V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V9" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14V17" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V11C3 9.93913 3.42143 8.92172 4.17157 8.17157C4.92172 7.42143 5.93913 7 7 7H17C18.0609 7 19.0783 7.42143 19.8284 8.17157C20.5786 8.92172 21 9.93913 21 11V17C21 18.0609 20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21Z" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-700">Não pedimos sua senha</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-700">Não é preciso seguir ninguém</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlanCard = ({ plan }: { plan: PlanProps }) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
        plan.isPopular ? "border-4 border-yellow-300" : ""
      }`}
    >
      {plan.isPopular && (
        <div className="bg-yellow-300 text-yellow-800 py-1 text-center text-sm font-bold flex items-center justify-center">
          <span className="mr-1">🔥</span> MAIS VENDIDO
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-center mb-6">{plan.name}</h3>
        
        <div className="flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-purple-700 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-2xl font-bold text-purple-700">{plan.followers}</span>
          <span className="ml-2 text-sm text-purple-700">
            Seguidores<br />Instagram
          </span>
        </div>
        
        <div className="mb-2 flex items-center justify-center">
          <Heart className="h-5 w-5 text-purple-700 mr-2" />
          <span className="text-gray-600 text-sm">+{plan.likes} Curtidas Bônus</span>
        </div>
        
        <div className="mb-4 flex items-center justify-center">
          <Eye className="h-5 w-5 text-purple-700 mr-2" />
          <span className="text-gray-600 text-sm">
            {plan.views === 0 ? "Sem" : `+${plan.views}`} Visualizações Bônus
          </span>
        </div>
        
        <div className="space-y-3 py-4">
          <div className="flex items-center">
            <Flag className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-gray-600 text-sm">Seguidores Reais e Brasileiros</span>
          </div>
          
          <div className="flex items-center">
            <Rocket className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-gray-600 text-sm">Entrega Rápida</span>
          </div>
          
          <div className="flex items-center">
            <RotateCw className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-gray-600 text-sm">Reposição Garantida</span>
          </div>
          
          <div className="flex items-center">
            <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-gray-600 text-sm">Consultoria de perfil</span>
          </div>
          
          <div className="flex items-center">
            <Package className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-gray-600 text-sm">Acesso ao Pack Viral com IA</span>
          </div>
        </div>
        
        <div className="text-center mt-6 mb-4">
          {plan.oldPrice && (
            <span className="text-red-500 line-through text-sm mr-2">
              R${plan.oldPrice.toFixed(2).replace(".", ",")}
            </span>
          )}
          <span className="text-2xl font-bold">
            R$ {plan.price.toFixed(2).replace(".", ",")}
          </span>
          {plan.installments && (
            <div className="text-xs text-gray-500 mt-1">
              {plan.installments}
            </div>
          )}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-4 rounded-full transition-colors"
        >
          Comprar Agora
        </motion.button>
      </div>
    </motion.div>
  );
};
