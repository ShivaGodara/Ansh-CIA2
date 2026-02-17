
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const KeyFindings: React.FC = () => {
  const [view, setView] = useState<'short' | 'long'>('short');

  const shortTermData = [
    { name: 'T1', reactive: 10, effective: 15 },
    { name: 'T2', reactive: 35, effective: 20 },
    { name: 'T3', reactive: 25, effective: 22 },
    { name: 'T4', reactive: 55, effective: 28 },
    { name: 'T5', reactive: 30, effective: 30 },
    { name: 'T6', reactive: 65, effective: 35 },
  ];

  const longTermData = [
    { name: 'Y1', reactive: 10, effective: 15 },
    { name: 'Y2', reactive: 25, effective: 35 },
    { name: 'Y3', reactive: 40, effective: 75 },
    { name: 'Y4', reactive: 35, effective: 120 },
    { name: 'Y5', reactive: 15, effective: 210 },
    { name: 'Y6', reactive: 5, effective: 350 },
  ];

  const currentData = view === 'short' ? shortTermData : longTermData;

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Performance Divide</h2>
          <p className="text-slate-400 max-w-xl">Statistical results showing how initial reactive gains quickly dissolve into terminal decline compared to effective compounding.</p>
        </div>
        
        <div className="flex p-1 bg-slate-900 rounded-xl border border-white/5">
          <button 
            onClick={() => setView('short')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === 'short' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Short-Term View
          </button>
          <button 
            onClick={() => setView('long')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === 'long' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Long-Term View
          </button>
        </div>
      </div>

      <div className="glass rounded-[2rem] p-6 md:p-10 border border-white/5 shadow-2xl">
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={currentData}>
              <defs>
                <linearGradient id="colorEffective" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorReactive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="#475569" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="#475569" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(val) => `$${val}k`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  borderColor: '#1e293b', 
                  borderRadius: '12px',
                  color: '#fff'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="effective" 
                stroke="#14b8a6" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorEffective)" 
                name="Effective Growth"
              />
              <Area 
                type="monotone" 
                dataKey="reactive" 
                stroke="#ef4444" 
                strokeWidth={2}
                strokeDasharray="5 5"
                fillOpacity={1} 
                fill="url(#colorReactive)" 
                name="Reactive Volatility"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5">
             <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Max Drawdown</div>
             <div className="text-2xl font-bold text-red-400">{view === 'short' ? '-15%' : '-85%'}</div>
          </div>
          <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5">
             <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Success Rate</div>
             <div className="text-2xl font-bold text-teal-400">{view === 'short' ? '42%' : '88%'}</div>
          </div>
          <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5">
             <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Decision Fatigue</div>
             <div className="text-2xl font-bold text-blue-400">{view === 'short' ? 'Medium' : 'Ultra-Low'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFindings;
