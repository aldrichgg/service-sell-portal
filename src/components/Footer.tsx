
import { Logo } from "@/assets/logo";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and disclaimer */}
          <div className="md:col-span-1">
            <Logo />
            <p className="text-sm text-gray-500 mt-4">
              O ImpulsioneGram NÃO é afiliado ao Instagram ou Facebook Inc.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-compra" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Termos de Compra
                </Link>
              </li>
              <li>
                <Link to="/termos-de-responsabilidade" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Termos de Responsabilidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/seguidores-instagram" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Seguidores Instagram
                </Link>
              </li>
              <li>
                <Link to="/curtidas-instagram" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Curtidas Instagram
                </Link>
              </li>
              <li>
                <Link to="/comentarios-instagram" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Comentários Instagram
                </Link>
              </li>
              <li>
                <Link to="/visualizacoes-reels-instagram" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Visualizações Reels Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="flex flex-col md:items-end">
            <div className="flex flex-col space-y-6">
              <img 
                src="/lovable-uploads/e4b4ade3-541e-4580-88b7-d54a08724df5.png" 
                alt="Certificação Reclame Aqui" 
                className="h-10 object-contain"
              />
              <img 
                src="/lovable-uploads/c79ce69c-5b0a-4f4f-96d6-967a7f8949d3.png" 
                alt="Empresa 5C" 
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* LGPD Compliance */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} ImpulsioneGram. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400 text-center mt-2">
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD), garantimos que seus dados pessoais são tratados com segurança e confidencialidade. 
            Para mais informações, consulte nossa Política de Privacidade.
          </p>
        </div>
      </div>
    </footer>
  );
};
