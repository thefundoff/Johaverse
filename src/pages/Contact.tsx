import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Send, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function Contact() {
  const services = [
    'Media Production',
    'Content Creation',
    'Social Media Management',
    'Branding & Design',
    'Creative Direction',
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <span className="text-sm uppercase tracking-widest font-bold text-brand-gold mb-6 block">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-brand-green mb-6 md:mb-8 leading-[0.9]">
              Let’s Build Something <span className="italic">Intentional.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-offblack/70 leading-relaxed mb-10 md:mb-12">
              Tell us about your brand, your vision, and what you need — we’ll take it from there. Every project starts with understanding your goals and how best to bring them to life.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/5 text-brand-green rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-brand-offblack/40">Email Us</p>
                  <p className="text-base md:text-lg font-medium text-brand-green break-all">thejohaverse@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/5 text-brand-green rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-brand-offblack/40">Call Us</p>
                  <p className="text-base md:text-lg font-medium text-brand-green">+234 913 177 6720</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/5 text-brand-green rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-brand-offblack/40">Visit Us</p>
                  <p className="text-base md:text-lg font-medium text-brand-green">Abuja, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-brand-offblack/5 shadow-2xl shadow-brand-green/5 relative overflow-hidden">
             {/* Decorative corner */}
             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-[3rem]" />
             
             <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-brand-offblack/60 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe" 
                        className="w-full bg-brand-cream/50 border border-brand-offblack/10 rounded-2xl p-4 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-smooth placeholder:text-brand-offblack/30"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-brand-offblack/60 ml-1">Brand Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Your Brand" 
                        className="w-full bg-brand-cream/50 border border-brand-offblack/10 rounded-2xl p-4 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-smooth placeholder:text-brand-offblack/30"
                      />
                   </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-brand-offblack/60 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com" 
                        className="w-full bg-brand-cream/50 border border-brand-offblack/10 rounded-2xl p-4 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-smooth placeholder:text-brand-offblack/30"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-brand-offblack/60 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+234..." 
                        className="w-full bg-brand-cream/50 border border-brand-offblack/10 rounded-2xl p-4 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-smooth placeholder:text-brand-offblack/30"
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs uppercase tracking-[0.2em] font-bold text-brand-offblack/60 ml-1">Service Required</label>
                   <div className="relative">
                      <select 
                        required
                        className="w-full bg-brand-cream/50 border border-brand-offblack/10 rounded-2xl p-4 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-smooth appearance-none cursor-pointer"
                      >
                        <option value="">Choose a path...</option>
                        {services.map((service, idx) => (
                          <option key={idx} value={service}>{service}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                         <ChevronRight className="rotate-90 w-4 h-4" />
                      </div>
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs uppercase tracking-[0.2em] font-bold text-brand-offblack/60 ml-1">Project Details</label>
                   <textarea 
                     rows={4} 
                     required
                     placeholder="Tell us about your mission and vision..." 
                     className="w-full bg-brand-cream/50 border border-brand-offblack/10 rounded-2xl p-4 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-smooth resize-none placeholder:text-brand-offblack/30"
                   ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-green text-brand-cream py-6 rounded-2xl text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-gold hover:shadow-xl hover:shadow-brand-gold/10 transition-smooth flex items-center justify-center gap-3 mt-4"
                >
                   Initiate Project
                   <Send className="w-4 h-4" />
                </button>
             </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
