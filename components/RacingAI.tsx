import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { askRacingAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

const RacingAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await askRacingAssistant(input, messages);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "Atsiprašau, įvyko klaida." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-[#111] border border-white/10 w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-[#ccff00] p-4 flex justify-between items-center text-black">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6" />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider">Be1-AI Ekspertas</h4>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                  <span className="text-[10px] uppercase font-bold text-black/60">Pasiruošęs padėti</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
            {messages.length === 0 && (
              <div className="text-center py-10 text-gray-500 text-sm">
                <Bot className="w-12 h-12 mx-auto mb-4 opacity-20" />
                Sveiki! Aš esu Be1-AI. <br /> Galiu papasakoti apie Porsche ir BMW nuomą lenktynėms, aptarnavimo paketus bei apgyvendinimą.
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#ccff00] text-black font-medium rounded-br-none shadow-lg' 
                    : 'bg-white/10 text-gray-200 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-xl flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#ccff00]" />
                  <span className="text-xs text-gray-400 italic">Analizuojama...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Klausti apie nuomą..."
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-4 pr-12 outline-none focus:border-[#ccff00] transition-colors text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#ccff00] hover:text-[#b3e600] transition-colors disabled:opacity-30"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#ccff00] hover:bg-[#b3e600] text-black w-14 h-14 rounded-full shadow-2xl flex items-center justify-center group transition-all transform hover:scale-110 border-2 border-white/10"
        >
          <MessageSquare className="group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default RacingAI;