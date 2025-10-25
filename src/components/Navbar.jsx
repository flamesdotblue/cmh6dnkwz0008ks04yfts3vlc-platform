import React from 'react';
import { Rocket, Film, Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="relative grid place-items-center">
            <span className="absolute inset-0 rounded-full blur-md bg-gradient-to-tr from-rose-500 to-fuchsia-500 opacity-60" />
            <Rocket className="relative h-6 w-6 text-white" />
          </div>
          <span className="font-semibold tracking-tight">LoopLab Reels</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#reels" className="hover:text-white transition">Reels</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition">
          <Sparkles className="h-4 w-4" />
          Get a Reel
        </a>
      </div>
    </header>
  );
};

export default Navbar;
