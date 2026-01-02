import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1920" 
          alt="Be1 Racing Porsche Cayman 718 GT4 Clubsport" 
          className="w-full h-full object-cover brightness-[0.25] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-5 py-1.5 mb-8 border border-[#ccff00] text-[#ccff00] rounded-full text-xs font-bold tracking-[0.4em] uppercase animate-pulse bg-[#ccff00]/5">
          Elite Arrive & Drive Experience
        </div>
        <h1 className="text-6xl md:text-9xl font-black mb-8 leading-none tracking-tighter uppercase italic">
          BE<span className="text-[#ccff00] ml-1">1</span> <span className="gradient-text">Racing</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light">
          Profesionali <span className="text-white font-bold">Porsche Cayman 718</span> ir <span className="text-white font-bold">BMW E46 Compact</span> bolidų nuoma. <br/> Pilnas inžinerinis aptarnavimas B lygos ir aukštesnėms varžyboms.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#contact" className="w-full md:w-auto bg-[#ccff00] hover:bg-[#b3e600] text-black px-12 py-5 rounded-sm font-black text-lg transition-all transform hover:scale-105 uppercase tracking-widest shadow-xl shadow-[#ccff00]/20 text-center">
            Rezervuoti Bolidą
          </a>
          <a href="#cars" className="w-full md:w-auto border border-white/30 hover:bg-white hover:text-black text-white px-12 py-5 rounded-sm font-black text-lg transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-center">
            Mūsų Parkas
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Slinkti žemyn</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#ccff00] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;