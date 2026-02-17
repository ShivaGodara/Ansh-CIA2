
import React, { useState } from 'react';

const ComparisonSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const traits = [
    { reactive: "Impulsive / Emotional", effective: "Disciplined / Rational", category: "Mindset" },
    { reactive: "Short-term Gains", effective: "Long-term Compounding", category: "Horizon" },
    { reactive: "Rigid & Defensive", effective: "Adaptive & Proactive", category: "Response" },
    { reactive: "Pattern Matching", effective: "First Principles Thinking", category: "Cognition" },
    { reactive: "Outcome Obsessed", effective: "Process Oriented", category: "Focus" },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">What Makes a Strategist Effective?</h2>
        <p className="text-slate-400 max-w-xl mx-auto">Slide to reveal the stark contrast between reactive survival and effective dominance.</p>
      </div>

      <div className="relative glass rounded-3xl overflow-hidden h-[600px] shadow-2xl border border-white/5 group">
        {/* Effective Side (Right) */}
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-end px-12 md:px-24">
          <div className="max-w-md text-right">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-teal-400 mb-6">Effective Strategist</h3>
            <ul className="space-y-6">
              {traits.map((t, i) => (
                <li key={i} className="flex flex-col items-end">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{t.category}</span>
                  <span className="text-xl md:text-2xl font-medium text-slate-200">{t.effective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reactive Side (Left) */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-start px-12 md:px-24 z-10 transition-all duration-75"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="max-w-md">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-red-400 mb-6">Reactive Strategist</h3>
            <ul className="space-y-6">
              {traits.map((t, i) => (
                <li key={i} className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-widest text-blue-300/50 mb-1">{t.category}</span>
                  <span className="text-xl md:text-2xl font-medium text-white">{t.reactive}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white z-20 cursor-ew-resize group"
          style={{ left: `${sliderPos}%` }}
          onMouseDown={(e) => {
            const handleMouseMove = (moveEvent: MouseEvent) => {
              const rect = (e.currentTarget.parentNode as HTMLElement).getBoundingClientRect();
              let newPos = ((moveEvent.clientX - rect.left) / rect.width) * 100;
              newPos = Math.max(10, Math.min(90, newPos));
              setSliderPos(newPos);
            };
            const handleMouseUp = () => {
              window.removeEventListener('mousemove', handleMouseMove);
              window.removeEventListener('mouseup', handleMouseUp);
            };
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
          }}
          onTouchMove={(e) => {
             const rect = (e.currentTarget.parentNode as HTMLElement).getBoundingClientRect();
             let newPos = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
             newPos = Math.max(10, Math.min(90, newPos));
             setSliderPos(newPos);
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border-2 border-white flex items-center justify-center shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between text-[10px] uppercase tracking-widest text-slate-500 px-4">
        <span>Volatility Blindness</span>
        <span>Strategic Clarity</span>
      </div>
    </div>
  );
};

export default ComparisonSlider;
