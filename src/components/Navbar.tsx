
import { Logo } from "@/assets/logo";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="py-4 px-4 md:px-8 bg-white flex items-center justify-between mt-10 max-w-7xl mx-auto">
      <Link to="/" className="transition-transform hover:scale-105">
        <Logo />
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <Link to="/comprar" className="text-gray-700 hover:text-purple-700 transition-colors">
          Comprar Seguidores
        </Link>
        <Link to="/como-funciona" className="text-gray-700 hover:text-purple-700 transition-colors">
          Como funciona
        </Link>
        <Link to="/faq" className="text-gray-700 hover:text-purple-700 transition-colors">
          FAQ
        </Link>
        <div className="relative group">
          <button className="flex items-center text-gray-700 hover:text-purple-700 transition-colors">
            Pacotes <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <div className="absolute hidden group-hover:block mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out">
            <Link 
              to="/pacotes/seguidores" 
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700"
            >
              Seguidores
            </Link>
            <Link 
              to="/pacotes/curtidas" 
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700"
            >
              Curtidas
            </Link>
            <Link 
              to="/pacotes/visualizacoes" 
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700"
            >
              Visualizações
            </Link>
          </div>
        </div>
        <Link to="/suporte" className="text-gray-700 hover:text-purple-700 transition-colors">
          Suporte
        </Link>
        <Link to="/blog" className="text-gray-700 hover:text-purple-700 transition-colors">
          Blog
        </Link>
        <Link
          to="/login"
          className="text-gray-700 hover:text-purple-700 transition-colors"
        >
          Login
        </Link>
      </div>

      <button className="md:hidden text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};
