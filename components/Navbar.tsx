
import React from 'react';

interface NavbarProps {
  scrollProgress: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollProgress }) => {
  const navItems = [
    { label: 'Comparison', href: '#comparison' },
    { label: 'Simulation', href: '#simulation' },
    { label: 'Findings', href: '#findings' },
    { label: 'Quiz', href: '#minisim' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">STRATEGOS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="neumorph-btn px-5 py-2 rounded-full bg-blue-600 text-sm font-semibold hover:bg-blue-500 transition-all">
          Connect Labs
        </button>
      </nav>
      
      {/* Scroll Progress Bar */}
      <div className="absolute -bottom-2 left-8 right-8 h-0.5 bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};

export default Navbar;
