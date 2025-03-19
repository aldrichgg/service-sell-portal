
import { Button } from "@/components/ui/button";

export const HowItWorksSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
          Com apenas alguns cliques você pode comprar milhares de seguidores e curtidas em seu Instagram de forma fácil, rápida, segura e garantida. <span className="italic">Veja como é simples:</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/e4b4ade3-541e-4580-88b7-d54a08724df5.png" 
              alt="Escolha seu pacote" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold mb-4">Escolha o seu pacote</h3>
          <p className="text-gray-600">
            Escolha o pacote de seguidores e curtidas que mais combina com você para comprar seguidores com a quantidade ideal.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full bg-purple-100 flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/c79ce69c-5b0a-4f4f-96d6-967a7f8949d3.png" 
              alt="Insira seu usuário" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold mb-4">Insira o seu @usuario do Instagram e finalize o pedido</h3>
          <p className="text-gray-600">
            Digite seu nome de usuário (jamais pediremos sua senha), escolha a melhor forma de pagamento - Cartão de Crédito, Pix ou Boleto - e finalize a compra.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full bg-orange-100 flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/1bda9318-f4bd-4829-9cf9-582d2f3880c9.png" 
              alt="Veja seu Instagram decolando" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold mb-4">Veja seu Instagram decolando!</h3>
          <p className="text-gray-600">
            Acomode-se na poltrona e acompanhe seus novos seguidores chegando de forma automática em seu perfil depois de comprar seguidores reais e brasileiros.
            <br />Simples assim :)
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg">
          Escolher o Meu Pacote
        </Button>
      </div>
    </section>
  );
};
