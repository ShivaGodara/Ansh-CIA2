
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase animate-pulse">
          Next-Gen Decision Simulation
        </div>
        
        <h1 className="text-5xl md:text-8xl font-heading font-extrabold leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-slate-500 mb-8 max-w-5xl mx-auto">
          Strategic Decision-Making Under <span className="text-blue-500">Uncertainty</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          An exploration into the cognitive architecture of leadership. Discover why reactive minds falter in volatility, while effective strategists thrive by leveraging probability, timing, and systems thinking.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#simulation" className="neumorph-btn px-8 py-4 bg-blue-600 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all flex items-center gap-2 group">
            Explore the Simulation
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <button className="px-8 py-4 rounded-xl border border-slate-700 font-semibold hover:bg-slate-900 transition-all text-slate-300">
            View Methodology
          </button>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute -left-20 top-1/2 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute -right-20 top-1/4 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </div>
  );
};

export default Hero;
