
import React from 'react';

const Conclusion: React.FC = () => {
  return (
    <div className="container px-6 max-w-5xl mx-auto text-center">
      <div className="inline-block w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-400 mb-12 rounded-full"></div>
      
      <h2 className="text-4xl md:text-7xl font-heading font-extrabold leading-tight mb-16 tracking-tight">
        Strategy is defined not by the <span className="italic text-slate-500">choice</span>, but by the <span className="relative inline-block">
          thinking model 
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full animate-[underline_3s_infinite_alternate]"></div>
        </span> behind it.
      </h2>

      <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
        We conclude that the most effective strategists aren't necessarily those who work the hardest, but those who build the most accurate maps of reality.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-3 glass px-6 py-3 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="text-sm font-bold tracking-tight">Clarity of Vision</span>
        </div>
        <div className="flex items-center gap-3 glass px-6 py-3 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          <span className="text-sm font-bold tracking-tight">Precision of Execution</span>
        </div>
        <div className="flex items-center gap-3 glass px-6 py-3 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          <span className="text-sm font-bold tracking-tight">Adaptive Resilience</span>
        </div>
      </div>

      <style>{`
        @keyframes underline {
          0% { width: 0%; opacity: 0.5; }
          100% { width: 100%; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Conclusion;
