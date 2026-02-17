
import React from 'react';

const RealWorldImplications: React.FC = () => {
  const sectors = [
    { title: "Leadership", desc: "Shifting from command-and-control to decentralized intent-based leadership.", color: "from-blue-500" },
    { title: "Public Policy", desc: "Long-term infrastructure bets over short-term election cycles.", color: "from-purple-500" },
    { title: "Entrepreneurship", desc: "Building anti-fragile business models that thrive on chaos.", color: "from-teal-500" },
    { title: "Crisis Management", desc: "Moving from panic reaction to calculated, phased response protocols.", color: "from-indigo-500" },
    { title: "Competitive Strategy", desc: "Winning without fighting by leveraging structural asymmetries.", color: "from-slate-500" },
  ];

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12">Real-World Implications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((s, i) => (
          <div 
            key={i} 
            className="group relative p-8 glass rounded-3xl border border-white/5 hover:border-white/20 transition-all overflow-hidden"
          >
            {/* Hover Gradient Overlay */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity`}></div>
            
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${s.color} to-white`}></span>
              {s.title}
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {s.desc}
            </p>
          </div>
        ))}
        
        {/* Placeholder for "The Future" CTA card */}
        <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl hover:scale-105 transition-all">
          <h3 className="text-xl font-bold mb-2">The AI Integration</h3>
          <p className="text-white/80 text-sm mb-6">How decision intelligence is being augmented by LLMs.</p>
          <button className="px-6 py-2 bg-white text-blue-600 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-100">
            Download Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealWorldImplications;
