import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Sparkles, Compass, Focus, Goal } from 'lucide-react';
import { Link } from 'react-router-dom';
import founderImage from '../assets/founder.jpg';

export default function About() {
  const approaches = [
    { title: 'Strategic thinking', icon: <Sparkles className="w-5 h-5 text-brand-gold" /> },
    { title: 'Creative direction', icon: <Compass className="w-5 h-5 text-brand-gold" /> },
    { title: 'Attention to detail', icon: <Focus className="w-5 h-5 text-brand-gold" /> },
    { title: 'Goal-oriented execution', icon: <Goal className="w-5 h-5 text-brand-gold" /> },
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          <div>
            <span className="text-sm uppercase tracking-widest font-bold text-brand-gold mb-6 block">Who We Are</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-brand-green mb-6 md:mb-8 leading-[1.1] text-balance">
              Simplifying the <span className="italic">Creative Journey.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-offblack/70 leading-relaxed max-w-xl">
              Johaverse is a creative hub built to simplify how brands show up, grow, and stay relevant in a fast-moving digital world.
            </p>
          </div>
          <div className="relative">
            {/* Offset decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-brand-gold/30" />
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-brand-green/10">
              <img
                src={founderImage}
                alt="Johaverse Founder"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/20 to-transparent" />
            </div>
            {/* Gold glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </section>

      {/* Meet Me Section (Portrait in prompt) */}
      <section className="py-16 md:py-24 px-6 bg-white border-y border-brand-offblack/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
             <span className="text-sm uppercase tracking-widest font-bold text-brand-gold mb-6 block">Meet the Heart of Johaverse</span>
             <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-8">Crafting Excellence with Purpose</h2>
             <p className="text-lg text-brand-offblack/80 mb-6 leading-relaxed">
               Every project is a partnership. I believe that consistency, direction, and a structured creative support system are what's often missing in brand growth.
             </p>
             <p className="text-lg text-brand-offblack/80 mb-6 leading-relaxed italic border-l-2 border-brand-gold pl-6">
               "Think of Johaverse as a media multiverse — a space where every part of your brand comes together seamlessly."
             </p>
             <p className="text-lg text-brand-offblack/80 mb-8 leading-relaxed">
               We take 50–90% of the creative and content burden off our clients, allowing you to focus on leading your business.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {approaches.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-brand-cream/50 rounded-2xl border border-brand-offblack/5">
                    {item.icon}
                    <span className="font-medium text-brand-green">{item.title}</span>
                  </div>
                ))}
             </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Offset decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[3rem] border border-brand-gold/25" />

              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-green/15">
                <img
                  src={founderImage}
                  alt="Johaverse Founder"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle inner ring */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                {/* Bottom name plate */}
                <div className="absolute bottom-0 left-0 w-full px-10 py-8 bg-gradient-to-t from-brand-green/90 via-brand-green/50 to-transparent">
                  <p className="text-brand-gold font-serif text-xl italic mb-1">Founder & Director</p>
                  <p className="text-brand-cream/70 text-xs uppercase tracking-[0.2em] font-bold">Johaverse</p>
                </div>
              </div>

              {/* Gold glow accent */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-gold/15 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-brand-green mb-8">Our Story</h2>
        <p className="text-xl text-brand-offblack/70 leading-relaxed mb-12">
          Johaverse was born from a simple observation — many brands struggle not because they lack ideas, but because they lack consistency, direction, and the right support system. We built Johaverse to become that system.
        </p>
        <div className="h-px w-24 bg-brand-gold mx-auto" />
      </section>

      {/* Experience / Different */}
      <section className="py-16 md:py-24 px-6 bg-brand-green text-brand-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="text-4xl font-serif mb-8">What Makes Us Different</h2>
            <p className="text-brand-cream/80 text-lg leading-relaxed mb-8">
              Johaverse is a complete creative ecosystem where everything your brand needs — from media to design to content — works together seamlessly under one structure.
            </p>
            <div className="p-8 border border-brand-cream/20 rounded-3xl bg-white/5">
               <p className="text-3xl font-serif text-brand-gold italic mb-4">"The Johaverse Experience"</p>
               <p className="text-brand-cream/80">We take 50–90% of the creative and content burden off our clients, allowing you to focus on leading your business.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
             <div className="space-y-12">
                <blockquote className="text-3xl md:text-5xl font-serif italic text-brand-gold leading-tight">
                  "You bring the vision. We build the experience."
                </blockquote>
                <Link
                  to="/contact"
                  className="inline-block bg-brand-gold text-brand-cream px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-brand-green transition-smooth"
                >
                  Work With Us
                </Link>
             </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
