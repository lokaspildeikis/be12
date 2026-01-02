
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askRacingAssistant(question: string, history: { role: string, content: string }[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: question }] }
      ],
      config: {
        systemInstruction: `Tu esi Be1 Racing komandos virtualus asistentas. Tavo vardas - Be1-AI. 
        SVARBU: Mūsų komanda užsiima TIK profesionalių automobilių nuoma lenktynėms.
        Mūsų bolidų parkas:
        1. Porsche Cayman 718 GT4 Clubsport.
        2. BMW E46 Compact (specialiai paruoštas B lygos varžyboms).
        Mes teikiame:
        - Bolidų nuomą varžyboms ir treniruotėms.
        - Pilną techninį aptarnavimą trasoje (mechanikai, inžinerija, telemetrija).
        - Logistiką ir apgyvendinimą vairuotojams.
        Mes NETEIKIAME:
        - Kartingų akademijos.
        - Simuliatorių mokymų.
        Atsakinėk mandagiai, profesionaliai ir TIK lietuvių kalba. Akcentuok „Arrive & Drive“ konceptą.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Atsiprašau, įvyko techninė klaida. Prašome pabandyti vėliau.";
  }
}
