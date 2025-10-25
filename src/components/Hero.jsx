import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/QrI46EbSvyxcmozb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(185,28,28,0.12)_0%,rgba(0,0,0,0.5)_45%,rgba(0,0,0,0.85)_80%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full blur-3xl opacity-25 bg-red-700/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
          The CreationX crafts
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">viral reel experiences</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
          Red-hot hooks, kinetic edits, and sound that slaps. We turn attention into loyalty for Gen Z native brands.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#reels" className="px-6 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-400 transition">
            Explore Reels
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-red-500/40 bg-white/5 text-white hover:bg-white/10 transition">
            Book a Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
