
import { UserPlus, CheckCircle, XCircle } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
      {/* Testimonial Quote */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
          &quot;Antes era muito difícil conseguir parcerias, mas desde o dia que comecei a comprar seguidores e a usar o ImpulsioneGram meu Instagram mudou muito e ganhou mais visibilidade.&quot;
        </blockquote>
        
        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/1bda9318-f4bd-4829-9cf9-582d2f3880c9.png" 
              alt="Tainá Montenegro" 
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold text-gray-900">Tainá Montenegro</p>
              <p className="text-gray-600 text-sm">@richelly_groomer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Truth Section */}
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-10">
          <div className="flex flex-col items-center">
            <div className="mb-2">
              <UserPlus className="w-16 h-16 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-purple-600 uppercase">A verdade é...</h2>
          </div>
        </div>

        <div className="space-y-10">
          {/* Positive point */}
          <div className="flex items-start gap-6">
            <CheckCircle className="w-10 h-10 text-green-500 flex-shrink-0" />
            <p className="text-xl text-green-500">
              As pessoas preferem seguir e confiar em perfis com milhares de seguidores.
            </p>
          </div>

          {/* Negative point */}
          <div className="flex items-start gap-6">
            <XCircle className="w-10 h-10 text-red-500 flex-shrink-0" />
            <p className="text-xl">
              Perfis com poucos seguidores <span className="font-semibold text-red-500">não</span> despertam interesse e <span className="font-semibold text-red-500">não</span> passam credibilidade.
            </p>
          </div>
        </div>

        {/* Explanatory paragraph */}
        <p className="text-center text-lg text-gray-700 mt-12 mb-12">
          Para celebridades e marcas já conhecidas, crescer no Instagram pode ser simples. Mas para a grande maioria das pessoas é um processo complexo, lento e incerto.
        </p>

        <p className="text-center text-lg text-purple-600 font-medium">
          Criado por uma equipe de especialistas em redes sociais, o ImpulsioneGram nasceu para transformar essa realidade.
        </p>
      </div>
    </section>
  );
};
