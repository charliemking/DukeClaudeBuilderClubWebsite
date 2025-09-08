import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/Claude_AI_symbol.svg.png" 
            alt="Claude Logo" 
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold text-[#CD7F5C]">
            <span className="block sm:hidden">DCBC</span>
            <span className="hidden sm:block">Duke Claude Builder Club</span>
          </span>
        </div>
        
        <nav className="flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition-colors ${
              location.pathname === '/' ? 'text-[#CD7F5C]' : 'text-gray-600 hover:text-[#CD7F5C]'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition-colors ${
              location.pathname === '/about' ? 'text-[#CD7F5C]' : 'text-gray-600 hover:text-[#CD7F5C]'
            }`}
          >
            About
          </Link>
          <a 
            href="https://groupme.com/join_group/110034638/3ENj8qsT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#CD7F5C] transition-colors"
          >
            Join
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;