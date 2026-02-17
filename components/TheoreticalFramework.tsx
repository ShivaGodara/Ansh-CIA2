
import React, { useState } from 'react';
import { FrameworkTab } from '../types';

const TheoreticalFramework: React.FC = () => {
  const tabs: FrameworkTab[] = [
    {
      id: 'game-theory',
      label: 'Game Theory',
      content: 'Strategists operate in an environment where their success depends on the choices of others. Game theory models these interdependencies.',
      example: 'The Prisoner\'s Dilemma applied to market competition and pricing wars.',
      visualType: 'game-theory'
    },
    {
      id: 'behavioral',
      label: 'Behavioral Econ',
      content: 'Understanding cognitive biases like loss aversion and status quo bias is crucial to predicting how reactive agents will fail.',
      example: 'Retail investors panic-selling during volatility while institutions accumulate assets.',
      visualType: 'behavioral'
    },
    {
      id: 'decision',
      label: 'Decision Theory',
      content: 'A framework for making the best choice in the face of uncertainty. It uses utility functions and subjective probabilities.',
      example: 'Determining R&D budgets based on expected value vs. certain conservative gains.',
      visualType: 'decision'
    },
    {
      id: 'systems',
      label: 'Systems Thinking',
      content: 'Viewing strategic problems as interconnected loops rather than linear cause-and-effect events.',
      example: 'Analyzing how a supply chain shock impacts brand reputation and long-term customer loyalty.',
      visualType: 'systems'
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Theoretical Framework</h2>
        <div className="flex flex-col gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`p-6 text-left rounded-2xl transition-all border ${
                activeTab.id === tab.id 
                  ? 'glass border-blue-500/50 bg-blue-500/5 translate-x-4' 
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${activeTab.id === tab.id ? 'text-blue-400' : ''}`}>
                Framework 0{tabs.indexOf(tab) + 1}
              </span>
              <span className="text-xl font-bold">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 h-full flex flex-col justify-center">
        <div className="glass rounded-3xl p-10 border border-white/5 relative overflow-hidden group min-h-[400px] flex flex-col">
          {/* Background Visual Decoration */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full group-hover:bg-blue-500/10 transition-colors"></div>
          
          <div className="relative z-10 flex-1">
            <h3 className="text-3xl font-heading font-bold mb-6 text-white">{activeTab.label}</h3>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
              {activeTab.content}
            </p>
            
            <div className="mt-auto">
              <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span className="text-[10px] uppercase font-bold text-teal-400 tracking-widest">Real-World Application</span>
                </div>
                <p className="text-slate-400 italic">"{activeTab.example}"</p>
              </div>
            </div>
          </div>
          
          {/* Abstract SVG Visual Placeholder based on VisualType */}
          <div className="absolute top-10 right-10 opacity-20 pointer-events-none transform scale-150 rotate-12">
            <svg width="100" height="100" viewBox="0 0 100 100">
               {activeTab.visualType === 'game-theory' && <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />}
               {activeTab.visualType === 'behavioral' && <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />}
               {activeTab.visualType === 'decision' && <path d="M20,80 L50,20 L80,80" fill="none" stroke="currentColor" strokeWidth="2" />}
               {activeTab.visualType === 'systems' && <path d="M50,10 A40,40 0 1,1 49,10" fill="none" stroke="currentColor" strokeWidth="2" />}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoreticalFramework;
