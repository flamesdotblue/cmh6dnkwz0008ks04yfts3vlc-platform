import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Film, Star } from 'lucide-react';

const reels = [
  {
    src: 'https://cdn.coverr.co/videos/coverr-young-woman-recording-on-her-smartphone-2802/1080p.mp4',
    title: 'Creator POV',
    tag: 'Behind the Scenes',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-pouring-milk-into-coffee-8549/1080p.mp4',
    title: 'Cafe Aesthetic',
    tag: 'Product Loop',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-a-girl-dances-6136/1080p.mp4',
    title: 'Trend Dance',
    tag: 'Trend Remix',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-stylish-man-using-phone-in-city-8288/1080p.mp4',
    title: 'Street Style',
    tag: 'UGC Ad',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-shoes-on-a-skateboard-6706/1080p.mp4',
    title: 'Skate Vibes',
    tag: 'Lifestyle',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-a-woman-shopping-online-with-her-credit-card-8514/1080p.mp4',
    title: 'Shop Now',
    tag: 'Conversion Edit',
  },
];

const ReelCard = ({ src, title, tag }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onMouseEnter = () => el.play().catch(() => {});
    const onMouseLeave = () => el.pause();
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);
    return () => {
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-[420px] w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs bg-white/10 border border-white/10 backdrop-blur-md">
            <Film className="h-3.5 w-3.5" />
            <span>{tag}</span>
          </div>
          <h3 className="mt-2 text-lg font-semibold drop-shadow-lg">{title}</h3>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-amber-300">
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
        </div>
      </div>
      <div className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(244,63,94,0.6), rgba(217,70,239,0.6), rgba(124,58,237,0.6), rgba(244,63,94,0.6))' }} />
    </motion.div>
  );
};

const Services = () => {
  const items = [
    {
      title: 'UGC + Editing',
      desc: 'We source creators and deliver edits sized for Reels, TikTok, and Shorts with hooks that hold attention.',
    },
    {
      title: 'Trend Mapping',
      desc: 'Weekly strategy sprints matching trends with your brand voice for consistent viral momentum.',
    },
    {
      title: 'Motion + Sound',
      desc: 'Kinetic typography, dynamic captions, and sound design that amplifies watch time.',
    },
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.15)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold">Services built for the For You Page</h2>
          <span className="text-white/60 text-sm">Fast. Iterative. Data-informed.</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReelShowcase = () => {
  return (
    <>
      <section id="reels" className="relative py-20">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,70,239,0.12)_0%,rgba(0,0,0,0)_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold">Our Reels hit different</h2>
              <p className="mt-2 text-white/70">Swipe through a few styles we deliver every week for brands and creators.</p>
            </div>
            <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition">Start your reel</a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reels.map((r) => (
              <ReelCard key={r.src} {...r} />
            ))}
          </div>
        </div>
      </section>
      <Services />
      <section id="contact" className="relative py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold">Ready to make the feed stop scrolling?</h3>
          <p className="mt-3 text-white/75">Tell us your goal. We’ll pitch 3 concepts and deliver your first reel in 5 days.</p>
          <form className="mt-8 grid gap-4 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required name="name" placeholder="Your name" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 outline-none focus:border-white/30" />
              <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 outline-none focus:border-white/30" />
            </div>
            <input name="brand" placeholder="Brand / Handle" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 outline-none focus:border-white/30" />
            <textarea name="brief" placeholder="What are you trying to achieve?" rows="4" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 outline-none focus:border-white/30" />
            <button type="submit" className="mt-2 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition">
              <Film className="h-4 w-4" />
              Get Concepts
            </button>
            <p className="text-xs text-white/50">By submitting, you agree to our terms. We’ll reply within 24 hours.</p>
          </form>
        </div>
      </section>
    </>
  );
};

export default ReelShowcase;
