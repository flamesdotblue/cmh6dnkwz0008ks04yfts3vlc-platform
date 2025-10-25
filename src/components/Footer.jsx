import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-red-500/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <p>© {new Date().getFullYear()} The CreationX. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-red-400 transition">Instagram</a>
          <a href="#" className="hover:text-red-400 transition">TikTok</a>
          <a href="#" className="hover:text-red-400 transition">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
