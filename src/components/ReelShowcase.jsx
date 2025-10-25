import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Film, Star, Camera, ExternalLink } from 'lucide-react';

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
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-red-500/20 backdrop-blur-md">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none" />
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
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs bg-black/50 border border-red-500/30 backdrop-blur-md">
            <Film className="h-3.5 w-3.5 text-red-400" />
            <span className="text-white">{tag}</span>
          </div>
          <h3 className="mt-2 text-lg font-semibold drop-shadow-lg">{title}</h3>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-red-400">
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
        </div>
      </div>
      <div
        className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500"
        style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(239,68,68,0.65), rgba(185,28,28,0.65), rgba(127,29,29,0.6), rgba(239,68,68,0.65))' }}
      />
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
      desc: 'Weekly strategy sprints matching trends with your brand voice for consistent momentum.',
    },
    {
      title: 'Motion + Sound',
      desc: 'Kinetic typography, dynamic captions, and sound design that amplifies watch time.',
    },
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.12)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold">Built to dominate the feed</h2>
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
              className="rounded-2xl p-6 bg-white/5 border border-red-500/20">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TapeMarquee = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_1px] opacity-20 pointer-events-none" />
      <div className="whitespace-nowrap will-change-transform animate-[marquee_18s_linear_infinite] py-3 border-y border-red-500/20 bg-black/60">
        <span className="mx-6 inline-flex items-center gap-2 text-white/80 text-sm">
          <span className="h-2 w-2 rounded-full bg-red-500" /> Viral Hooks
        </span>
        <span className="mx-6 inline-flex items-center gap-2 text-white/80 text-sm">
          <span className="h-2 w-2 rounded-full bg-red-500" /> Kinetic Typography
        </span>
        <span className="mx-6 inline-flex items-center gap-2 text-white/80 text-sm">
          <span className="h-2 w-2 rounded-full bg-red-500" /> Trend Mapping
        </span>
        <span className="mx-6 inline-flex items-center gap-2 text-white/80 text-sm">
          <span className="h-2 w-2 rounded-full bg-red-500" /> Sound Design
        </span>
        <span className="mx-6 inline-flex items-center gap-2 text-white/80 text-sm">
          <span className="h-2 w-2 rounded-full bg-red-500" /> UGC Ads
        </span>
        <span className="mx-6 inline-flex items-center gap-2 text-white/80 text-sm">
          <span className="h-2 w-2 rounded-full bg-red-500" /> Retention-First Edits
        </span>
      </div>
      <style>{`@keyframes marquee { 0%{ transform: translateX(0);} 100%{ transform: translateX(-50%);} }`}</style>
    </div>
  );
};

const Stat = ({ end, label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(start + (end - start) * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [inView, end]);

  return (
    <div ref={ref} className="rounded-2xl p-6 bg-white/5 border border-red-500/20 text-center">
      <div className="text-3xl sm:text-4xl font-extrabold text-red-400">{val}+</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
};

const Results = () => {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(127,29,29,0.18)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h3 className="text-xl sm:text-3xl font-bold">Numbers that spark confidence</h3>
          <span className="text-white/60 text-sm">Avg across last 30 campaigns</span>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <Stat end={120} label="Avg. Watch Time Increase (%)" />
          <Stat end={35} label="Conversion Lift vs. Baseline (%)" />
          <Stat end={500} label="Creator Network (active)" />
        </div>
      </div>
    </section>
  );
};

const InstagramSection = () => {
  const instagramUrl = 'https://www.instagram.com/thecreation_x/';

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-3xl p-8 bg-gradient-to-br from-black via-black to-red-950/30 border border-red-500/30 overflow-hidden">
            <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-red-600/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 text-xs text-white/80 mb-4">
                <Camera className="h-3.5 w-3.5 text-red-400" />
                Live Social Proof
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold">Watch our freshest reels</h3>
              <p className="mt-3 text-white/75 max-w-xl">We feature select edits and creator collabs on Instagram. Tap in to see trend-first concepts, sound design, and kinetic captions in action.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-400 transition">
                  Open Instagram
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-red-500/40 bg-white/5 text-white hover:bg-white/10 transition">
                  Get your reel strategy
                </a>
              </div>
              <p className="mt-3 text-xs text-white/50">Note: Direct Instagram embedding requires specific post URLs or API access. We link to the official page for the smoothest experience.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-3 gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 border border-red-500/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <div className="absolute inset-0 grid place-content-center">
                  <Camera className="h-8 w-8 text-red-400 opacity-80" />
                </div>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0"
                  aria-label="Open The CreationX Instagram"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ReelShowcase = () => {
  return (
    <>
      <TapeMarquee />
      <section id="reels" className="relative py-20">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.12)_0%,rgba(0,0,0,0)_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold">Reels that burn into memory</h2>
              <p className="mt-2 text-white/70">Swipe through styles we deliver weekly for brands and creators.</p>
            </div>
            <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-red-500 text-white text-sm font-medium hover:bg-red-400 transition">Start your reel</a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reels.map((r) => (
              <ReelCard key={r.src} {...r} />
            ))}
          </div>
        </div>
      </section>
      <Results />
      <Services />
      <InstagramSection />
      <section id="contact" className="relative py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold">Ready to ignite your brand?</h3>
          <p className="mt-3 text-white/75">Tell us your goal. We’ll pitch 3 concepts and deliver your first reel in 5 days.</p>
          <form className="mt-8 grid gap-4 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required name="name" placeholder="Your name" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-red-500/20 outline-none focus:border-red-500/50" />
              <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-red-500/20 outline-none focus:border-red-500/50" />
            </div>
            <input name="brand" placeholder="Brand / Handle" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-red-500/20 outline-none focus:border-red-500/50" />
            <textarea name="brief" placeholder="What are you trying to achieve?" rows="4" className="w-full rounded-xl px-4 py-3 bg-white/5 border border-red-500/20 outline-none focus:border-red-500/50" />
            <button type="submit" className="mt-2 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-400 transition">
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
