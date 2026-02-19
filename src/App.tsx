/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'motion/react';
import { 
  Leaf, 
  Globe, 
  Droplets, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUpRight,
  MapPin,
  Clock,
  Users
} from 'lucide-react';
import { cn } from './lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-6",
      isScrolled ? "bg-brand-cream/90 backdrop-blur-xl py-4 border-b border-brand-ink/5" : "bg-transparent"
    )}>
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            <Leaf className="text-brand-cream w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-bold tracking-tighter text-brand-green">Stronach & Sons</span>
            <span className="text-[8px] uppercase tracking-[0.3em] font-black text-brand-olive ml-1">Est. 1970</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          {['Our Legacy', 'Produce', 'Partners', 'Logistics'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-brand-gold transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-xs font-bold uppercase tracking-widest hover:text-brand-olive transition-colors">
            Contact
          </button>
          <button className="bg-brand-ink text-brand-cream px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-green transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-ink/10">
            Wholesale Inquiry
          </button>
        </div>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="text-brand-green" /> : <Menu className={cn(isScrolled ? "text-brand-green" : "text-white")} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-cream z-[60] p-12 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="font-serif text-3xl font-bold text-brand-green">Stronach & Sons</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-brand-ink text-brand-cream rounded-full">
                <X />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {['Our Legacy', 'Produce', 'Partners', 'Logistics'].map((item, idx) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-5xl font-serif italic hover:text-brand-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <div className="flex justify-between items-end">
              <div className="text-xs uppercase tracking-widest text-brand-ink/40">
                © 2026 Stronach & Sons 2020
              </div>
              <div className="flex gap-4">
                <Instagram className="w-5 h-5" />
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

  return (
    <section className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y: y1, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1488459711635-0c6758971816?auto=format&fit=crop&q=80&w=2400"
          alt="Ontario Food Terminal"
          className="w-full h-full object-cover brightness-[0.6]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/60 via-transparent to-brand-cream" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-brand-gold" />
                <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black">
                  Ontario Food Terminal Legacy
                </span>
              </div>
              <h1 className="text-7xl md:text-[11vw] font-serif text-white leading-[0.85] tracking-tighter mb-12">
                Rooted in <br />
                <span className="italic font-normal text-brand-cream/90">Tradition</span>
              </h1>
            </motion.div>
          </div>
          
          <div className="lg:col-span-4 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-3xl border-white/10"
            >
              <p className="text-brand-cream/80 text-lg font-light leading-relaxed mb-8 text-balance">
                A trusted name at the Ontario Food Terminal for more than half a century. 
                Built on generations of hands-on experience and an uncompromising commitment to quality.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-brand-gold text-brand-ink px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all group flex items-center gap-2">
                  Wholesale Catalog
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute left-12 bottom-12 hidden xl:block">
        <div className="flex flex-col gap-8">
          <div className="vertical-rl text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">
            STRONACH & SONS 2020 — TORONTO, ON
          </div>
          <div className="w-px h-24 bg-gradient-to-b from-white/40 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="our-legacy" className="py-32 bg-brand-cream relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-black mb-6 block">About Us</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] tracking-tight">
            Driven by <br />
            <span className="italic text-brand-olive">Progress</span>
          </h2>
          <div className="space-y-8 text-brand-ink/70 text-lg font-light leading-relaxed max-w-xl">
            <p>
              A trusted name at the Ontario Food Terminal for more than half a century, Stronach & Sons 2020 is a leading wholesale produce supplier in Ontario, built on generations of hands-on experience, strong relationships, and an uncompromising commitment to quality.
            </p>
            <p>
              Quality is at the core of everything we do. As an established produce wholesaler in Ontario, we carefully source, inspect, and deliver fresh fruits and vegetables that meet the highest standards for freshness, consistency, and reliability.
            </p>
            <p>
              Looking ahead, Stronach & Sons 2020 is focused on intentional, sustainable growth. We are expanding our customer and vendor portfolio with partners who share our dedication to quality, accountability, and long-term success.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-brand-ink/10 pt-12">
            <div>
              <div className="text-4xl font-serif text-brand-green mb-2">50+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-brand-green mb-2">100%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Quality Inspected</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-brand-green mb-2">24/7</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Terminal Presence</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mask-oval aspect-[4/5] overflow-hidden bg-brand-ink"
          >
            <img 
              src="https://images.unsplash.com/photo-1573246123716-6b1782bee499?auto=format&fit=crop&q=80&w=1200" 
              alt="Fresh Wholesale Produce"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-8 -left-8 bg-brand-gold text-brand-ink p-8 rounded-2xl shadow-2xl max-w-[200px]">
            <div className="text-xs font-black uppercase tracking-widest mb-2">Ontario Food Terminal</div>
            <p className="text-[10px] leading-relaxed font-bold">Proudly serving as a cornerstone of Ontario's food distribution network for decades.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProduceGrid = () => {
  const categories = [
    {
      title: 'Heirloom Citrus',
      desc: 'Hand-picked varieties from the Mediterranean basin, selected for high essential oil content and balanced acidity.',
      img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=1200',
      tag: 'Seasonal',
      size: 'large'
    },
    {
      title: 'Organic Roots',
      desc: 'Nutrient-dense vegetables grown in volcanic soil.',
      img: 'https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?auto=format&fit=crop&q=80&w=800',
      tag: 'Core',
      size: 'small'
    },
    {
      title: 'Exotic Berries',
      desc: 'Delicate fruits cultivated with precision climate control.',
      img: 'https://images.unsplash.com/photo-1518635017498-87af5e433f13?auto=format&fit=crop&q=80&w=800',
      tag: 'Premium',
      size: 'small'
    },
    {
      title: 'Leafy Greens',
      desc: 'Hydroponically grown for maximum freshness and flavor.',
      img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1200',
      tag: 'Daily',
      size: 'large'
    }
  ];

  return (
    <section id="produce" className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-3xl">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">The Collection</span>
          <h2 className="text-6xl md:text-[8vw] font-serif leading-[0.85] tracking-tighter">
            Nature's <br />
            <span className="italic text-brand-olive">Masterpieces</span>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-brand-ink/60 text-sm leading-relaxed mb-8 italic">
            "We carefully source, inspect, and deliver fresh fruits and vegetables that meet the highest standards for freshness, consistency, and reliability."
          </p>
          <div className="flex items-center gap-4 group cursor-pointer">
            <span className="text-xs font-black uppercase tracking-widest">Wholesale Catalog</span>
            <div className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center group-hover:bg-brand-ink group-hover:text-brand-cream transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className={cn(
              "group relative overflow-hidden rounded-[2.5rem] cursor-pointer",
              cat.size === 'large' ? "md:col-span-7 h-[600px]" : "md:col-span-5 h-[600px]"
            )}
          >
            <img 
              src={cat.img} 
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
            
            <div className="absolute top-10 right-10">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full">
                {cat.tag}
              </div>
            </div>

            <div className="absolute bottom-12 left-12 right-12 text-white">
              <div className="flex items-end justify-between gap-8">
                <div className="max-w-md">
                  <h3 className="text-4xl md:text-5xl font-serif mb-4 group-hover:italic transition-all duration-500">{cat.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    {cat.desc}
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-brand-ink transition-all duration-500 flex-shrink-0">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const BrandsSection = () => {
  const brands = [
    { name: 'Little Bear', desc: 'Premium North American Producer' },
    { name: 'Washington Fruit', desc: 'Top-tier Apple & Pear Growers' },
    { name: 'Dole', desc: 'Global Standard in Fresh Vegetables' },
    { name: 'Collins Farms', desc: 'Local Ontario Heritage Grower' },
    { name: 'Saliba Farms', desc: 'Trusted Local Ontario Partner' },
    { name: 'Caledon Farms', desc: 'Excellence in Local Agriculture' }
  ];

  return (
    <section id="partners" className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-3xl">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">Our Partners</span>
          <h2 className="text-6xl md:text-[8vw] font-serif leading-[0.85] tracking-tighter">
            Trusted <br />
            <span className="italic text-brand-olive">Alliances</span>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-brand-ink/60 text-sm leading-relaxed mb-8 italic">
            "We believe the best produce comes from strong partnerships. We proudly support local Ontario growers while maintaining long-standing relationships with top North American producers."
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-12 bg-white rounded-[2.5rem] border border-brand-ink/5 hover:bg-brand-green hover:border-brand-green transition-all duration-500 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-green group-hover:bg-brand-gold group-hover:text-brand-ink transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-6 h-6 text-brand-ink/20 group-hover:text-brand-gold transition-colors" />
            </div>
            <h3 className="text-3xl font-serif mb-2 group-hover:text-white transition-colors">{brand.name}</h3>
            <p className="text-brand-ink/40 text-sm group-hover:text-brand-cream/60 transition-colors uppercase tracking-widest font-bold">{brand.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const LogisticsSection = () => {
  return (
    <section id="logistics" className="py-32 bg-brand-green text-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover"
          alt="Logistics"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-transparent to-transparent" />
      </div>
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">Global Logistics</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-[1.1] tracking-tighter">
              Reliable <br />
              <span className="italic text-brand-cream/60">Distribution</span>
            </h2>
            <p className="text-brand-cream/60 text-lg font-light leading-relaxed mb-12">
              Our diverse sourcing network allows us to deliver premium local and imported produce year-round. We carefully source, inspect, and deliver fresh fruits and vegetables that meet the highest standards.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="text-brand-gold w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-widest">Ontario Food Terminal Hub</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-brand-gold w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-widest">Year-Round Availability</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Source', desc: 'Direct from local Ontario growers and top North American producers.' },
                { title: 'Inspect', desc: 'Rigorous quality control at the terminal to ensure peak freshness.' },
                { title: 'Deliver', desc: 'Reliable distribution for restaurants, retailers, and foodservice.' },
                { title: 'Scale', desc: 'Intentional growth focused on long-term partner success.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-all"
                >
                  <h4 className="text-2xl font-serif mb-4 text-brand-gold">{item.title}</h4>
                  <p className="text-brand-cream/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-brand-cream pt-32 pb-12 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                <Leaf className="text-brand-cream w-7 h-7" />
              </div>
              <span className="font-serif text-4xl font-bold tracking-tighter">Stronach & Sons</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif italic mb-12 leading-tight max-w-md">
              Generations of <br />
              <span className="text-brand-gold">Excellence</span> in Produce.
            </h3>
            <div className="flex gap-6">
              {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-ink hover:border-brand-gold transition-all duration-500">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-10">Company</h5>
              <ul className="space-y-6 text-sm font-medium text-brand-cream/40">
                <li><a href="#" className="hover:text-white transition-colors">Our Legacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-10">Brands</h5>
              <ul className="space-y-6 text-sm font-medium text-brand-cream/40">
                <li><a href="#" className="hover:text-white transition-colors">Little Bear</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Washington Fruit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dole</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collins Farms</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-10">Inquiries</h5>
              <p className="text-sm text-brand-cream/40 mb-8 leading-relaxed">Partner with a leader at the Ontario Food Terminal.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent border-b border-white/20 w-full py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-gold hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-brand-cream/20">
          <div>© 2026 Stronach & Sons 2020. All Rights Reserved.</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen relative">
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        
        {/* Marquee Section */}
        <div className="bg-brand-gold py-6 overflow-hidden border-y border-brand-ink/10">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-12 px-6">
                <span className="text-brand-ink text-xs font-black uppercase tracking-[0.5em]">Ontario Food Terminal</span>
                <Leaf className="w-4 h-4 text-brand-ink" />
                <span className="text-brand-ink text-xs font-black uppercase tracking-[0.5em]">Generations of Quality</span>
                <Leaf className="w-4 h-4 text-brand-ink" />
                <span className="text-brand-ink text-xs font-black uppercase tracking-[0.5em]">Trusted Wholesale Partner</span>
                <Leaf className="w-4 h-4 text-brand-ink" />
              </div>
            ))}
          </div>
        </div>

        <AboutSection />
        <ProduceGrid />
        <BrandsSection />
        <LogisticsSection />
        
        {/* Call to Action Section */}
        <section className="py-32 px-6 md:px-12">
          <div className="max-w-[1800px] mx-auto bg-brand-green rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2400" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s]"
                alt="Background Pattern"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-black mb-8 block">Wholesale Inquiry</span>
              <h2 className="text-5xl md:text-[7vw] font-serif text-white mb-12 leading-[0.85] tracking-tighter">
                Grow Your <br />
                <span className="italic text-brand-cream/60">Success With Us</span>
              </h2>
              <p className="text-brand-cream/60 text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                We are expanding our customer and vendor portfolio with partners who share our dedication to quality and accountability.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-brand-gold text-brand-ink px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl">
                  Become a Partner
                </button>
                <button className="text-white border border-white/20 px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
}

