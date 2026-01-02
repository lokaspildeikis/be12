import React from 'react';
import { Target, Shield, Car, Settings2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#0d0d0d] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#ccff00]/10 rounded-full blur-[100px]"></div>
            <img 
              src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800" 
              alt="Be1 Racing Service" 
              className="rounded-sm shadow-2xl relative z-10 w-full grayscale-[0.4] hover:grayscale-0 transition-all duration-1000 border border-white/5"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#ccff00] text-black p-8 rounded-sm z-20 hidden md:block shadow-2xl">
              <span className="block text-4xl font-black tracking-tighter italic">
                BE<span className="inline-block not-italic ml-0.5">1</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Racing Team</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase leading-none">
              PROFESIONALI <br/><span className="text-[#ccff00]">NUOMA</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
              „Be1 Racing“ specializuojasi teikdama aukščiausio lygio lenktynių infrastruktūrą. Mes dirbame su ambicingais entuziastais, kuriems reikia patikimos technikos: <span className="text-white font-bold">Porsche Cayman 718 GT4 Clubsport</span> profesionalioms varžyboms ir <span className="text-white font-bold">BMW E46 Compact</span> B lygos čempionatams.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Car className="text-[#ccff00]" />, title: "B lygos bolidai", desc: "Specialiai paruoštas BMW E46 Compact – puikus pasirinkimas B lygos startams." },
                { icon: <Settings2 className="text-[#ccff00]" />, title: "Inžinerinis meistriškumas", desc: "Mūsų inžinieriai užtikrina, kad bolidas būtų sureguliuotas būtent jūsų važiavimo stiliui." },
                { icon: <Target className="text-[#ccff00]" />, title: "Visas aptarnavimas", desc: "Mes pasirūpiname transportavimu, kuru, padangomis ir jūsų apgyvendinimu." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="mt-1 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-black mb-1 uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;