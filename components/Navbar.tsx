import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#ccff00] text-black rounded flex items-center justify-center font-black text-xl italic skew-x-[-12deg]">
            <span className="inline-block">BE</span>
            <span className="inline-block not-italic skew-x-[12deg] ml-0.5 transform -translate-y-[0.5px]">1</span>
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">Racing</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-bold uppercase tracking-widest hover:text-[#ccff00] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="bg-[#ccff00] hover:bg-[#b3e600] text-black px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2">
            REGISTRUOTIS <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 p-6 flex flex-col space-y-4 animate-in slide-in-from-top">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-bold uppercase"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="bg-[#ccff00] text-black px-6 py-3 rounded-md font-bold text-center">
            REGISTRUOTIS
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;