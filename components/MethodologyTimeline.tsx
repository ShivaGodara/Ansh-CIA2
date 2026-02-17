
import React, { useRef, useEffect } from 'react';

const MethodologyTimeline: React.FC = () => {
  const steps = [
    { title: "Scenario Construction", desc: "Crafting a multi-variable environment with 40% noise levels and hidden patterns.", year: "Phase 1" },
    { title: "Participant Selection", desc: "Recruiting 500 decision-makers ranging from novice entrepreneurs to Fortune 500 CXOs.", year: "Phase 2" },
    { title: "Iterative Rounds", desc: "Executing 50 simulation rounds where participants allocate resources under strict time constraints.", year: "Phase 3" },
    { title: "Behavioral Mapping", desc: "Tracking eye-movements and decision latency to understand cognitive load during crisis.", year: "Phase 4" },
    { title: "Statistical Analysis", desc: "Applying Bayesian regression to isolate 'Skill' from 'Luck' in long-term outcomes.", year: "Phase 5" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      // If we're scrolling vertically, scroll horizontally instead if we are within the timeline section
      // This is a simple implementation; in production use a more robust scroll library
      // el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel);
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="py-12">
      <div className="container px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Methodology</h2>
        <p className="text-slate-400">Our experiment was built on rigorous scientific standards.</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-12 px-6 scrollbar-hide snap-x"
      >
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-[300px] md:w-[400px] glass rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all snap-center group"
          >
            <div className="text-blue-500 font-mono text-sm mb-4">{step.year}</div>
            <div className="w-12 h-1 bg-blue-500/20 mb-6 rounded-full overflow-hidden">
               <div className="h-full bg-blue-500 w-1/3 group-hover:w-full transition-all duration-700"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-slate-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MethodologyTimeline;
