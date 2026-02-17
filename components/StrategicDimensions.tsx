
import React, { useState } from 'react';
import { Dimension } from '../types';

const StrategicDimensions: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const dimensions: Dimension[] = [
    {
      id: 'cognitive',
      title: 'Cognitive Structure',
      description: 'The mental scaffolding used to process complex data.',
      icon: '🧠',
      detailedInfo: 'Effective strategists use first-principles thinking to break problems into atomic parts, avoiding the trap of reasoning by analogy.'
    },
    {
      id: 'risk',
      title: 'Risk Calibration',
      description: 'Differentiating between danger and probability.',
      icon: '⚖️',
      detailedInfo: 'Risk isn\'t something to be avoided, but priced. Understanding asymmetric upside is the key to sustainable strategic advantage.'
    },
    {
      id: 'adaptive',
      title: 'Adaptive Flexibility',
      description: 'Maintaining goals while pivoting tactics.',
      icon: '🌊',
      detailedInfo: 'Strategies should be firm in direction but fluid in execution. This allows for capitalizing on emergent opportunities.'
    }
  ];

  return (
    <div className="container px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Three Dimensions of Excellence</h2>
        <p className="text-slate-400">The intersection where superior performance is born.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dimensions.map((dim) => (
          <div 
            key={dim.id}
            onClick={() => setActiveId(activeId === dim.id ? null : dim.id)}
            className={`cursor-pointer glass rounded-[2.5rem] p-10 border transition-all duration-500 flex flex-col items-center text-center ${
              activeId === dim.id 
                ? 'border-blue-500/50 bg-blue-600/10 scale-105 shadow-[0_0_50px_rgba(59,130,246,0.2)]' 
                : 'border-white/5 hover:border-white/20'
            }`}
          >
            <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform">{dim.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{dim.title}</h3>
            <p className="text-slate-400 mb-6">{dim.description}</p>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === dim.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pt-6 border-t border-white/10 text-slate-300 text-sm leading-relaxed">
                {dim.detailedInfo}
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
              {activeId === dim.id ? 'Click to close' : 'Click to expand'}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${activeId === dim.id ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategicDimensions;
