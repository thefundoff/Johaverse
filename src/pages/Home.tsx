import { motion } from 'motion/react';
import { ArrowRight, Camera, Target, Paintbrush, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import heroImage from '../assets/hero.jpg';
import work1 from '../assets/work-1.jpg';
import work2 from '../assets/work-2.jpg';
import work3 from '../assets/work-3.jpg';

function useCountUp(end: number, inView: boolean, duration = 2000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(ease * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  return val;
}

export default function Home() {
  const services = [
    {
      title: 'Creative Direction & Media',
      desc: 'High-quality photography, videography, and content production tailored to your brand.',
      icon: <Camera className="w-6 h-6" />,
    },
    {
      title: 'Brand Growth & Strategy',
      desc: 'Helping brands stay visible, relevant, and engaging across digital platforms.',
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: 'Design & Visual Identity',
      desc: 'Clean, modern, and cohesive brand visuals that communicate your message effectively.',
      icon: <Paintbrush className="w-6 h-6" />,
    },
  ];

  const resultsRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = resultsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const views       = useCountUp(67024, inView, 2200);
  const reached     = useCountUp(32056, inView, 2400);
  const followers   = useCountUp(3637,  inView, 2000);
  const interactions= useCountUp(572,   inView, 1800);
  const newFollows  = useCountUp(126,   inView, 1600);
  const posts       = useCountUp(31,    inView, 1400);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-24 overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Gradient overlay — keeps brand identity while letting the image breathe */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green/80 via-brand-green/60 to-brand-green/90" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent to-black/30" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl relative z-10"
        >
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[9.5rem] font-serif text-brand-cream mb-6 md:mb-8 leading-[0.9] md:leading-[0.85] tracking-tight text-balance">
            We Build Visual <span className="italic text-brand-gold">Experiences</span><br className="hidden md:block" /> for Modern Brands.
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mt-8 md:mt-12">
            <div className="text-left md:w-1/3">
              <p className="text-sm md:text-base text-brand-cream/75 mb-0 leading-relaxed">
                Media, content, and brand visuals — crafted to help your business stand out and grow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
              <Link
                to="/contact"
                className="bg-brand-gold text-brand-cream px-7 py-4 md:px-10 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-brand-green transition-smooth shadow-lg text-center"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="group border border-brand-cream/40 text-brand-cream px-7 py-4 md:px-10 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-widest font-bold hover:bg-brand-cream hover:text-brand-green transition-smooth flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Short Introduction */}
      <section className="py-16 md:py-24 px-6 bg-brand-green text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-brand-gold/20"
            >
              {/* Replace with Founder image if available */}
              <div className="absolute inset-0 flex items-center justify-center text-brand-gold font-serif text-2xl italic p-12 text-center">
                "We don’t just create content — we craft experiences."
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-balance">
                At Johaverse, we don't just create content —<br className="hidden md:block" /> <span className="text-brand-gold italic">we craft experiences.</span>
              </h2>
              <p className="text-lg text-brand-cream/80 mb-8 leading-relaxed">
                From visual storytelling to brand growth, we help businesses and personal brands bring their ideas to life with clarity, creativity, and precision.
              </p>
              <Link to="/about" className="text-brand-gold font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
                Learn our story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-sm uppercase tracking-widest font-bold text-brand-gold mb-4 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-green">Our Expert Services</h2>
          </div>
          <Link to="/services" className="text-brand-green font-bold uppercase tracking-widest text-sm border-b border-brand-green/20 pb-2 hover:border-brand-green transition-smooth">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-white rounded-3xl border border-brand-offblack/5 hover:border-brand-gold transition-smooth shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-brand-green/5 text-brand-green rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-green group-hover:text-brand-cream transition-smooth">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-brand-green mb-4">{service.title}</h3>
              <p className="text-brand-offblack/70 leading-relaxed mb-6">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-sm uppercase tracking-widest font-bold text-brand-gold mb-4 block">Selected Work</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green">
                Moments We've <span className="italic">Captured</span>
              </h2>
            </div>
            <Link to="/about" className="text-brand-green font-bold uppercase tracking-widest text-sm border-b border-brand-green/20 pb-2 hover:border-brand-green transition-smooth whitespace-nowrap">
              Meet the Photographer
            </Link>
          </div>

          {/* Asymmetric grid: large left + two stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">

            {/* Large feature image — left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7 group relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[680px]"
            >
              <img
                src={work1}
                alt="Client photography"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/70 via-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-brand-gold text-xs uppercase tracking-[0.25em] font-bold block mb-1">Photography</span>
                <p className="text-brand-cream font-serif text-2xl italic">Creative Direction</p>
              </div>
            </motion.div>

            {/* Two stacked images — right */}
            <div className="md:col-span-5 grid grid-rows-2 gap-4 md:gap-5 md:h-[680px]">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="group relative rounded-[2rem] overflow-hidden aspect-square md:aspect-auto"
              >
                <img
                  src={work2}
                  alt="Client photography"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/70 via-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-brand-gold text-xs uppercase tracking-[0.25em] font-bold block mb-1">Photography</span>
                  <p className="text-brand-cream font-serif text-xl italic">Portrait</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="group relative rounded-[2rem] overflow-hidden aspect-square md:aspect-auto"
              >
                <img
                  src={work3}
                  alt="Client photography"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/70 via-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-brand-gold text-xs uppercase tracking-[0.25em] font-bold block mb-1">Photography</span>
                  <p className="text-brand-cream font-serif text-xl italic">Editorial</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Social Media Results */}
      <section className="py-16 md:py-24 px-6 bg-brand-green text-brand-cream overflow-hidden" ref={resultsRef}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-sm uppercase tracking-widest font-bold text-brand-gold mb-4 block">Client Results</span>
              <h2 className="text-4xl md:text-5xl font-serif">
                Real Growth. <span className="italic text-brand-gold">Real Numbers.</span>
              </h2>
            </div>
            <div className="text-right">
              <p className="text-brand-cream/40 text-xs uppercase tracking-[0.2em] font-bold">30 Mar – 28 Apr</p>
              <p className="text-brand-cream/40 text-xs uppercase tracking-[0.2em] mt-1">Instagram Analytics</p>
            </div>
          </div>

          {/* Featured views metric */}
          <div className="border-b border-brand-cream/10 pb-12 mb-12">
            <p className="text-brand-cream/40 text-xs uppercase tracking-[0.2em] font-bold mb-4">Total Views</p>
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <span className="text-7xl md:text-[8rem] font-serif leading-none tabular-nums">
                {views.toLocaleString()}
              </span>
              <div className="flex flex-col gap-3 md:mb-4">
                <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/25 rounded-full px-4 py-2 w-fit">
                  <TrendingUp className="w-4 h-4 text-brand-gold" />
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Trending Up</span>
                </div>
                <p className="text-brand-cream/35 text-sm">82.8% from ads · 17.2% organic</p>
              </div>
            </div>
          </div>

          {/* 4-stat grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Accounts Reached', value: reached.toLocaleString(), badge: '+520.2%', gold: true },
              { label: 'Total Followers',  value: followers.toLocaleString(), badge: '+3.1%',   gold: true },
              { label: 'Interactions',     value: interactions.toLocaleString(), badge: '↑ Up', gold: false },
              { label: 'Posts Shared',     value: posts.toString(),  badge: 'This period',      gold: false },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                className="bg-white/5 border border-brand-cream/10 rounded-[1.5rem] p-6 md:p-8"
              >
                <p className="text-brand-cream/40 text-xs uppercase tracking-[0.18em] font-bold mb-5">{stat.label}</p>
                <p className="text-3xl md:text-4xl font-serif tabular-nums mb-4">{stat.value}</p>
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${
                  stat.gold ? 'bg-brand-gold/15 text-brand-gold' : 'bg-brand-cream/10 text-brand-cream/50'
                }`}>
                  {stat.badge}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Breakdown cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Reach breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-white/5 border border-brand-cream/10 rounded-[2rem] p-8 md:p-10"
            >
              <p className="text-brand-cream/40 text-xs uppercase tracking-[0.2em] font-bold mb-8">Reach Breakdown</p>
              <div className="space-y-6">
                {[
                  { label: 'Non-followers', pct: 95.3, color: 'bg-brand-cream' },
                  { label: 'From Ads',      pct: 82.8, color: 'bg-brand-gold' },
                  { label: 'Followers',     pct: 4.7,  color: 'bg-brand-gold/50' },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2.5">
                      <span className="text-sm text-brand-cream/60">{row.label}</span>
                      <span className="text-sm font-bold text-brand-cream">{row.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-brand-cream/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${row.color} rounded-full transition-[width] duration-1000 ease-out`}
                        style={{ width: inView ? `${row.pct}%` : '0%', transitionDelay: `${0.8 + i * 0.15}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Follower activity */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="bg-white/5 border border-brand-cream/10 rounded-[2rem] p-8 md:p-10"
            >
              <p className="text-brand-cream/40 text-xs uppercase tracking-[0.2em] font-bold mb-8">Follower Activity</p>
              <div className="space-y-6">
                {[
                  { label: 'New Follows', display: newFollows, barPct: 100,  color: 'bg-brand-gold' },
                  { label: 'Net Growth',  display: 110,        barPct: 87.3, color: 'bg-brand-cream' },
                  { label: 'Unfollows',   display: 16,         barPct: 12.7, color: 'bg-brand-cream/30' },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2.5">
                      <span className="text-sm text-brand-cream/60">{row.label}</span>
                      <span className="text-sm font-bold text-brand-cream tabular-nums">{row.display}</span>
                    </div>
                    <div className="h-1.5 bg-brand-cream/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${row.color} rounded-full transition-[width] duration-1000 ease-out`}
                        style={{ width: inView ? `${row.barPct}%` : '0%', transitionDelay: `${0.9 + i * 0.15}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          <p className="text-center text-brand-cream/20 text-xs uppercase tracking-[0.25em] font-bold mt-14">
            Real Instagram analytics from a brand managed by Johaverse
          </p>

        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 px-6 bg-brand-cream border-t border-brand-offblack/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-green mb-10 text-balance">
            Why Choose <span className="italic">Johaverse</span>
          </h2>
          <p className="text-xl md:text-2xl text-brand-offblack/70 leading-relaxed max-w-3xl mx-auto">
            We combine creativity with structure, and aesthetics with intention. Every project is handled with a clear vision — ensuring your brand doesn’t just look good, but <span className="text-brand-green font-semibold italic">stands out.</span>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-green rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center text-brand-cream relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif mb-6 md:mb-8 text-balance">
                Ready to bring your vision <br className="hidden md:block"/> to life?
              </h2>
              <Link
                to="/contact"
                className="inline-block bg-brand-gold text-brand-cream px-12 py-6 rounded-full text-base uppercase tracking-widest font-bold hover:bg-white hover:text-brand-green transition-smooth shadow-2xl"
              >
                Start a Project
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-[40%] aspect-square bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-[40%] aspect-square bg-gradient-to-tl from-brand-green/20 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
