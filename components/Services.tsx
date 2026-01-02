import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 italic">PASLAUGŲ <span className="text-[#ccff00]">PAKETAI</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">Viskas, ko reikia profesionaliam startui vienoje vietoje.</p>
          <div className="w-24 h-1 bg-[#ccff00] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-[#151515] p-10 rounded-2xl border border-white/5 racing-card-hover group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-[#ccff00] font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Sužinoti daugiau <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;