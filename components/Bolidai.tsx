import React from 'react';
import { Gauge, Zap, Shield } from 'lucide-react';

const bolidai = [
  {
    name: "Porsche Cayman 718 GT4 Clubsport",
    specs: "425 AG | 3.8L Flat-6",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
    desc: "Aukščiausio lygio gamyklinis bolidas, skirtas profesionalioms žiedinėms lenktynėms.",
    weight: "~1320 kg",
    gearbox: "6-pavarų PDK"
  },
  {
    name: "BMW E46 Compact (B Lyga)",
    specs: "~230 AG | Spec. paruošimas",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800",
    desc: "Tiksliai suderintas bolidas, orientuotas į B lygos čempionatus. Pasižymi puikiu svorio balansu.",
    weight: "~1150 kg",
    gearbox: "Manual/Spec"
  }
];

const Bolidai: React.FC = () => {
  return (
    <section id="cars" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black italic mb-6 uppercase">MŪSŲ <span className="text-[#ccff00]">BOLIDAI</span></h2>
          <div className="w-24 h-1 bg-[#ccff00] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {bolidai.map((auto, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 racing-card-hover">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={auto.image} 
                  alt={auto.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.3] group-hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black mb-2 italic uppercase">{auto.name}</h3>
                <div className="flex items-center gap-4 text-[#ccff00] font-bold mb-4">
                  <span className="flex items-center gap-2 text-sm uppercase tracking-wider"><Gauge size={16}/> {auto.specs}</span>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed font-light">
                  {auto.desc}
                </p>
                <div className="flex gap-4">
                  <div className="flex-1 bg-white/5 p-4 rounded-lg text-center border border-white/5">
                    <span className="block text-xs uppercase text-gray-500 mb-1 font-bold">Svoris</span>
                    <span className="font-bold text-white">{auto.weight}</span>
                  </div>
                  <div className="flex-1 bg-white/5 p-4 rounded-lg text-center border border-white/5">
                    <span className="block text-xs uppercase text-gray-500 mb-1 font-bold">Pavarų dėžė</span>
                    <span className="font-bold text-white">{auto.gearbox}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bolidai;