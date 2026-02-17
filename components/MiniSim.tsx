
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { QuizQuestion } from '../types';

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "A market shock drops your core asset value by 20% in an hour. Your move?",
    options: [
      { text: "Liquidate immediately to protect remaining capital.", type: 'Reactive', points: 10 },
      { text: "Refer to pre-set risk thresholds; hold if fundamentals are intact.", type: 'Analytical', points: 20 },
      { text: "Assess if the shock creates a buying opportunity in adjacent sectors.", type: 'Adaptive', points: 30 }
    ]
  },
  {
    id: 2,
    question: "A competitor launches a superior version of your product. How do you respond?",
    options: [
      { text: "Rush a copycat version to market within weeks.", type: 'Reactive', points: 10 },
      { text: "Conduct a deep teardown and recalibrate long-term R&D roadmap.", type: 'Analytical', points: 20 },
      { text: "Pivot your target audience to a niche where their product is weak.", type: 'Adaptive', points: 30 }
    ]
  },
  {
    id: 3,
    question: "You have excess capital. Where does it go?",
    options: [
      { text: "Short-term high-yield speculation.", type: 'Reactive', points: 10 },
      { text: "Paying down debt and strengthening the balance sheet.", type: 'Analytical', points: 20 },
      { text: "Optionality: Small bets on 5 emerging technologies.", type: 'Adaptive', points: 30 }
    ]
  }
];

const MiniSim: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ Analytical: 0, Adaptive: 0, Reactive: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (type: 'Analytical' | 'Adaptive' | 'Reactive', points: number) => {
    setScores(prev => ({ ...prev, [type]: prev[type] + points }));
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsFinished(true);
      generateAIInsights();
    }
  };

  const generateAIInsights = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const dominant = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I just completed a strategy quiz. My dominant profile is ${dominant}. 
        Give me a 2-sentence sophisticated strategic insight about this profile's strengths and one critical warning.`
      });
      setAiAnalysis(response.text);
    } catch (e) {
      setAiAnalysis("Your strategy reflects a unique blend of risk-awareness and execution discipline. Focus on maintaining a long-term horizon despite volatility.");
    } finally {
      setLoading(false);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setScores({ Analytical: 0, Adaptive: 0, Reactive: 0 });
    setIsFinished(false);
    setAiAnalysis(null);
  };

  const dominantType = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];

  return (
    <div className="container px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold mb-4">Strategic Persona Test</h2>
        <p className="text-slate-400">Discover your baseline decision architecture.</p>
      </div>

      {!isFinished ? (
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl animate-[fadeIn_0.5s_ease]">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">Question {currentStep + 1} of {questions.length}</span>
            <div className="flex gap-1">
              {[...Array(questions.length)].map((_, i) => (
                <div key={i} className={`h-1 w-8 rounded-full ${i <= currentStep ? 'bg-blue-500' : 'bg-slate-800'}`}></div>
              ))}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-10 leading-tight">
            {questions[currentStep].question}
          </h3>

          <div className="space-y-4">
            {questions[currentStep].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(opt.type, opt.points)}
                className="w-full p-6 text-left glass border border-white/5 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold group-hover:border-blue-500 group-hover:text-blue-500">
                  {String.fromCharCode(65 + i)}
                </div>
                <span className="flex-1 font-medium">{opt.text}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl animate-[slideUp_0.5s_ease]">
          <div className="text-center mb-10">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">Analysis Complete</h3>
            <div className="text-5xl font-heading font-bold mb-4">You are {dominantType === 'Adaptive' ? 'an' : 'a'} <span className="text-teal-400">{dominantType}</span> Strategist</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {Object.entries(scores).map(([key, val]) => (
              <div key={key} className="p-6 glass rounded-2xl border border-white/5 text-center">
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">{key} Tendency</div>
                {/* Fix: Explicitly cast 'val' to number to avoid TypeScript arithmetic errors on entries of object literal state */}
                <div className="text-3xl font-bold">{Math.round(((val as number) / 90) * 100)}%</div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-2xl mb-8 relative">
             <div className="absolute top-4 right-6 text-[10px] font-bold text-blue-500/50 uppercase tracking-widest">Gemini Analysis</div>
             {loading ? (
                <div className="flex items-center gap-3 py-4">
                  <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-slate-400 italic">Consulting the model...</span>
                </div>
             ) : (
                <p className="text-lg text-slate-300 leading-relaxed italic">
                  "{aiAnalysis}"
                </p>
             )}
          </div>

          <button 
            onClick={restart}
            className="w-full py-4 bg-slate-900 hover:bg-slate-800 rounded-2xl font-bold transition-all border border-white/5"
          >
            Retake Simulation
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default MiniSim;
