import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-[#111] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-[#ccff00] p-12 text-black">
            <h3 className="text-3xl font-black mb-8 italic uppercase">Susisiekite</h3>
            <p className="mb-10 text-black/80 font-medium">Turite klausimų? Norite prisijungti prie komandos? Mes esame čia, kad padėtume.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6" />
                <span className="font-bold">Kaunas, Lietuva</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <span className="font-bold">+370 600 00000</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <span className="font-bold">info@be1racing.lt</span>
              </div>
            </div>
            
            <div className="mt-16 flex space-x-4">
              {['Facebook', 'Instagram', 'YouTube'].map(social => (
                <div key={social} className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center hover:bg-black/10 cursor-pointer transition-colors text-xs font-bold">
                  {social[0]}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3 p-12 bg-white/5">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-gray-500">Vardas</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-[#ccff00] transition-colors" placeholder="Jūsų vardas" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-gray-500">El. paštas</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-[#ccff00] transition-colors" placeholder="pastas@pavyzdys.lt" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold uppercase text-gray-500">Tema</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-[#ccff00] transition-colors">
                  <option className="bg-[#111]">Akademija</option>
                  <option className="bg-[#111]">Simuliatoriai</option>
                  <option className="bg-[#111]">Partnerystė</option>
                  <option className="bg-[#111]">Kita</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold uppercase text-gray-500">Žinutė</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-[#ccff00] transition-colors min-h-[150px]" placeholder="Kaip galime jums padėti?"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-[#ccff00] hover:bg-[#b3e600] text-black py-4 rounded-lg font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all">
                  Siųsti užklausą <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;