
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComparisonSlider from './components/ComparisonSlider';
import SimulationFlow from './components/SimulationFlow';
import TheoreticalFramework from './components/TheoreticalFramework';
import MethodologyTimeline from './components/MethodologyTimeline';
import KeyFindings from './components/KeyFindings';
import StrategicDimensions from './components/StrategicDimensions';
import RealWorldImplications from './components/RealWorldImplications';
import Conclusion from './components/Conclusion';
import MiniSim from './components/MiniSim';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <Navbar scrollProgress={scrollProgress} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="comparison" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
          <ComparisonSlider />
        </section>

        <section id="simulation" className="py-24 bg-slate-900/50">
          <SimulationFlow />
        </section>

        <section id="framework" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
          <TheoreticalFramework />
        </section>

        <section id="methodology" className="py-24 overflow-hidden">
          <MethodologyTimeline />
        </section>

        <section id="findings" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
          <KeyFindings />
        </section>

        <section id="dimensions" className="py-24 bg-slate-900/30">
          <StrategicDimensions />
        </section>

        <section id="implications" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
          <RealWorldImplications />
        </section>

        <section id="conclusion" className="py-32">
          <Conclusion />
        </section>

        <section id="minisim" className="py-24 bg-gradient-to-b from-slate-950 to-blue-950">
          <MiniSim />
        </section>
      </main>

      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2026 Strategos Research Group. All rights reserved.</p>
        <p className="mt-2 text-slate-600">Built with Gemini Intelligence • Future of Strategic Design</p>
      </footer>
    </div>
  );
};

export default App;
