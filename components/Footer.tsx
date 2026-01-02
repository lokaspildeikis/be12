import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-[#ccff00] text-black rounded flex items-center justify-center font-black text-sm italic skew-x-[-12deg]">
            <span className="inline-block">BE</span>
            <span className="inline-block not-italic skew-x-[12deg] ml-0.5">1</span>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">Racing</span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8 mb-8">
          {['Privatumo Politika', 'Taisyklės', 'D.U.K.', 'Sąlygos'].map(item => (
            <a key={item} href="#" className="text-sm text-gray-500 hover:text-white transition-colors uppercase font-bold tracking-widest">
              {item}
            </a>
          ))}
        </nav>
        
        <p className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} BE1 RACING. Visos teisės saugomos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;