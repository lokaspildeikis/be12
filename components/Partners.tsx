
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-opacity">
          {PARTNERS.map((partner, i) => (
            <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
