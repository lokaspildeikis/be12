import React from 'react';
import { NEWS } from '../constants';

const News: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black">Naujienos</h2>
            <p className="text-gray-500 mt-2">Sekite mūsų pasiekimus ir naujienas realiu laiku.</p>
          </div>
          <button className="border-b-2 border-[#ccff00] text-[#ccff00] font-bold uppercase tracking-widest pb-1 hover:text-white hover:border-white transition-colors">
            Visas archyvas
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {NEWS.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-6 aspect-video">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-[#ccff00] text-xs font-bold uppercase tracking-widest mb-2">{item.date}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#ccff00] transition-colors leading-tight">{item.title}</h3>
              <p className="text-gray-500 line-clamp-2">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;