import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const serviceDetails = [
    {
      id: '01',
      title: 'Creative Direction & Media Production',
      items: ['Photography', 'Videography', 'Video Editing', 'Shoot planning & direction'],
    },
    {
      id: '02',
      title: 'Content Creation & Brand Growth',
      items: ['Content strategy', 'Monthly content creation', 'Social media management', 'Content calendars'],
    },
    {
      id: '03',
      title: 'Design & Brand Support',
      items: ['Graphic design', 'Brand identity', 'Visual consistency'],
    },
  ];

  const process = [
    { step: '01', name: 'Discovery', desc: 'Understanding your brand, vision, and goals.' },
    { step: '02', name: 'Strategy', desc: 'Developing a tailored creative roadmap.' },
    { step: '03', name: 'Creation', desc: 'Executing the vision with precision and craft.' },
    { step: '04', name: 'Delivery', desc: 'Finalizing and launching your refined brand visuals.' },
  ];

  return (
    <PageTransition>
      {/* Intro */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-widest font-bold text-brand-gold mb-6 block">Our Expertise</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-brand-green mb-8 md:mb-10 leading-[0.9]">
            Services <span className="italic">to Scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-offblack/70 leading-relaxed">
            Our services are designed to help brands create, grow, and maintain a strong digital presence — without the stress of managing multiple creatives.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 md:py-24 px-6 bg-brand-cream border-y border-brand-offblack/5">
        <div className="max-w-7xl mx-auto space-y-12">
          {serviceDetails.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] p-6 sm:p-8 md:p-16 border border-brand-offblack/5 hover:border-brand-gold transition-smooth shadow-sm flex flex-col md:flex-row gap-8 md:gap-12"
            >
              <div className="md:w-1/3">
                <span className="text-4xl md:text-6xl font-serif text-brand-gold/30 mb-4 block group-hover:text-brand-gold transition-smooth">
                  {service.id}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-brand-green">{service.title}</h3>
              </div>
              <div className="md:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                      <span className="text-lg text-brand-offblack/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-green mb-4">How We Work</h2>
          <p className="text-brand-offblack/60 uppercase tracking-widest text-sm font-bold">A Seamless Journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {process.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-green text-brand-cream rounded-full flex items-center justify-center font-serif text-2xl mb-8 group-hover:bg-brand-gold transition-smooth">
                  {step.step}
                </div>
                <h4 className="text-2xl font-serif text-brand-green mb-4">{step.name}</h4>
                <p className="text-brand-offblack/70 leading-relaxed">{step.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-[1px] bg-brand-offblack/10 -z-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto bg-brand-green text-brand-cream rounded-[3rem] p-12 md:p-20 text-center">
          <h3 className="text-3xl md:text-5xl font-serif mb-8 text-balance">
            Ready to build a strong and consistent brand presence?
          </h3>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-cream px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-brand-green transition-smooth"
          >
            Request a Quote
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
