
import React, { useState } from 'react';

interface Node {
  id: string;
  label: string;
  description: string;
  color: string;
}

const SimulationFlow: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const nodes: Node[] = [
    { id: 'data', label: 'Ambiguous Data', description: 'Raw signals from the market or environment. The first hurdle: separating signal from noise.', color: 'blue' },
    { id: 'alloc', label: 'Resource Allocation', description: 'The distribution of limited capital, talent, and attention across multiple competing bets.', color: 'purple' },
    { id: 'risk', label: 'Risk Evaluation', description: 'Quantifying potential downside using probabilistic modeling rather than gut feeling.', color: 'teal' },
    { id: 'seq', label: 'Sequential Decisions', description: 'The chain of choices where each outcome influences the next set of available options.', color: 'indigo' },
    { id: 'impact', label: 'Long-Term Impact', description: 'The compounding result of a consistent strategic mental model over multi-year periods.', color: 'green' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">The Simulation Model</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Every strategic move follows a predictable flow of information and energy. Click the nodes to explore the underlying mechanics of our simulation.</p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-12">
        {/* Animated Connecting Lines (Desktop only for simplicity) */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0 hidden md:block">
           <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 w-full animate-[shimmer_2s_infinite]"></div>
        </div>

        {nodes.map((node, index) => (
          <div 
            key={node.id} 
            className="relative z-10 flex flex-col items-center"
            onClick={() => setSelectedNode(node)}
          >
            <button 
              className={`w-20 h-20 md:w-28 md:h-28 rounded-full glass border-2 border-white/10 flex items-center justify-center text-center p-2 hover:scale-110 transition-transform cursor-pointer group hover:border-${node.color}-500/50`}
            >
              <div className={`w-3 h-3 rounded-full bg-${node.color}-500 mb-1 animate-pulse`}></div>
              <span className="text-[10px] md:text-xs font-bold leading-tight uppercase tracking-tighter">{node.label}</span>
            </button>
            <div className="mt-4 text-xs font-mono text-slate-500">STAGE 0{index + 1}</div>
          </div>
        ))}
      </div>

      {/* Modal / Explanation */}
      {selectedNode && (
        <div className="mt-12 glass rounded-2xl p-8 border-l-4 border-blue-500 animate-[slideUp_0.3s_ease]">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-2xl font-bold font-heading">{selectedNode.label}</h4>
            <button onClick={() => setSelectedNode(null)} className="text-slate-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">{selectedNode.description}</p>
        </div>
      )}

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default SimulationFlow;
