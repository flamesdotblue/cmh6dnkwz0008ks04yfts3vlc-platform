import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/QrI46EbSvyxcmozb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_40%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
          We Craft Viral Reels
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-fuchsia-500 to-violet-500">for Gen Z Brands</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
          High-energy edits, trend-first concepts, and scroll-stopping visuals. Turn views into vibes and engagement into growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#reels" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-[1.02] active:scale-[0.98] transition">
            Explore Reels
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
            Book a Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
