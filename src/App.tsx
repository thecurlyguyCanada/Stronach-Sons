/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Leaf,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  Award,
  ShieldCheck,
  History,
  TrendingUp,
  Activity,
  CheckCircle2,
  Calendar,
  Globe
} from 'lucide-react';
import { cn } from './lib/utils';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import AboutPage from './pages/About';
import DocumentationPage from './pages/Documentation';
import LeadForm from './components/LeadForm';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-gold/30 pointer-events-none z-[9999] hidden lg:block"
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    >
      <div className="w-1 h-1 bg-brand-gold rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
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
          src="/images/hero_ontario_terminal.png"
          alt="Ontario Food Terminal"
          className="w-full h-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/40 via-transparent to-brand-cream" />
      </motion.div>

      {/* Decorative Floating Text */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[40vw] font-serif text-white text-outline leading-none font-black italic select-none"
        >
          2020
        </motion.h2>
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 py-32 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-brand-gold" />
                <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black">
                  Est. 2020 • Wholesale Excellence
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[11vw] font-serif text-white leading-[0.85] tracking-tighter mb-12">
                Quality <br />
                <span className="italic font-normal text-brand-cream/90">& Horizon</span>
              </h1>
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 md:p-8 rounded-3xl border-white/10"
            >
              <p className="text-brand-cream/80 text-base md:text-lg font-light leading-relaxed mb-8 text-balance">
                A trusted name at the Ontario Food Terminal.
                Built on years of hands-on experience and an uncompromising commitment to quality.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-lead-form'))}
                  className="w-full sm:w-auto bg-brand-gold text-brand-ink px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all group flex items-center justify-center gap-2"
                >
                  Wholesale Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

const AboutSectionSnapshot = () => {
  return (
    <section id="our-legacy" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-black mb-6 block">About Us</span>
          <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-[1.1] tracking-tight">
            Driven by <br />
            <span className="italic text-brand-olive">Progress</span>
          </h2>
          <div className="space-y-8 text-brand-ink/70 text-base md:text-lg font-light leading-relaxed max-w-xl">
            <p>
              Stronach & Sons 2020 is a leading wholesale produce supplier in Ontario, built on professional expertise, strong relationships, and an uncompromising commitment to quality.
            </p>
            <p>
              Quality is at the core of everything we do. As an established produce wholesaler in Ontario, we carefully source, inspect, and deliver fresh fruits and vegetables that meet the highest standards for freshness, consistency, and reliability.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 border-t border-brand-ink/10 pt-12">
            <div>
              <div className="text-3xl md:text-4xl font-serif text-brand-green mb-2">2020</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Established Year</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif text-brand-green mb-2">100%</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Quality Inspected</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-3xl md:text-4xl font-serif text-brand-green mb-2">24/7</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Terminal Presence</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mask-oval aspect-[4/5] overflow-hidden bg-brand-ink"
          >
            <img
              src="/images/about_wholesale_produce.png"
              alt="Fresh Wholesale Produce"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-brand-gold text-brand-ink p-6 md:p-8 rounded-2xl shadow-2xl max-w-[160px] md:max-w-[200px]">
            <div className="text-[10px] font-black uppercase tracking-widest mb-2">Ontario Food Terminal</div>
            <p className="text-[9px] md:text-[10px] leading-relaxed font-bold">Proudly serving as a cornerstone of Ontario's food distribution network.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeritageTimeline = () => {
  const timelineEvents = [
    { year: '2020', title: 'The Launch', description: 'Stronach & Sons 2020 established at the Ontario Food Terminal with a focus on premium quality.', icon: History },
    { year: '2022', title: 'Network Expansion', description: 'Rapidly expanded operations and built strong relationships with top-tier North American producers.', icon: TrendingUp },
    { year: '2024', title: 'Modern Logistics', description: 'Implemented advanced tracking systems to ensure peak freshness and cold-chain integrity.', icon: Activity },
    { year: 'Today', title: 'Trusted Partner', description: 'Leading as a trusted wholesale partner, driven by progress and uncompromising quality standards.', icon: Globe },
  ];

  return (
    <section id="heritage-timeline" className="py-20 md:py-32 bg-brand-ink text-brand-cream relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">Our Journey</span>
          <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] tracking-tighter">
            A Legacy of <br />
            <span className="italic text-brand-cream/60">Excellence</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-brand-gold/20 hidden md:block" />
          {timelineEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={cn(
                "flex flex-col md:flex-row items-center md:items-start py-8 md:py-12 relative",
                idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
              )}
            >
              <div className={cn(
                "md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right md:pr-16",
                idx % 2 === 0 ? "md:order-1" : "md:order-2 md:pl-16"
              )}>
                <div className="text-brand-gold text-3xl md:text-4xl font-serif mb-2">{event.year}</div>
                <h3 className="text-xl md:text-2xl font-serif mb-3 text-brand-cream">{event.title}</h3>
                <p className="text-brand-cream/60 text-sm md:text-base leading-relaxed max-w-md">{event.description}</p>
              </div>
              <div className="absolute md:relative w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center z-10 md:order-2">
                <event.icon className="w-6 h-6 text-brand-ink" />
              </div>
              <div className={cn(
                "md:w-1/2 hidden md:block",
                idx % 2 === 0 ? "md:order-2" : "md:order-1"
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MarketplaceTicker = () => {
  const items = [
    { text: 'Ontario Food Terminal', icon: Leaf },
    { text: 'Expertly Sourced Quality', icon: Award },
    { text: 'Trusted Wholesale Partner', icon: ShieldCheck },
    { text: 'Freshness Guaranteed', icon: CheckCircle2 },
    { text: 'Year-Round Availability', icon: Calendar },
  ];

  return (
    <div className="bg-brand-gold py-6 overflow-hidden border-y border-brand-ink/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(3)].map((_, i) => ( // Repeat items to ensure continuous scroll
          <React.Fragment key={i}>
            {items.map((item, idx) => (
              <div key={`${i}-${idx}`} className="flex items-center gap-12 px-6">
                <span className="text-brand-ink text-xs font-black uppercase tracking-[0.5em]">{item.text}</span>
                <item.icon className="w-4 h-4 text-brand-ink" />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const ProduceGrid = () => {
  const categories = [
    {
      title: 'Heirloom Citrus',
      desc: 'Hand-picked varieties from the Mediterranean basin, selected for high essential oil content and balanced acidity.',
      img: '/images/citrus_heirloom.png',
      tag: 'Seasonal',
      size: 'large'
    },
    {
      title: 'Organic Roots',
      desc: 'Nutrient-dense vegetables grown in volcanic soil.',
      img: '/images/roots_organic.png',
      tag: 'Core',
      size: 'small'
    },
    {
      title: 'Exotic Berries',
      desc: 'Delicate fruits cultivated with precision climate control.',
      img: '/images/berries_exotic.png',
      tag: 'Premium',
      size: 'small'
    },
    {
      title: 'Leafy Greens',
      desc: 'Hydroponically grown for maximum freshness and flavor.',
      img: '/images/greens_leafy.png',
      tag: 'Daily',
      size: 'large'
    }
  ];

  return (
    <section id="produce" className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-12">
        <div className="max-w-3xl">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">The Collection</span>
          <h2 className="text-5xl md:text-[8vw] font-serif leading-[0.85] tracking-tighter">
            Nature's <br />
            <span className="italic text-brand-olive">Masterpieces</span>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-brand-ink/60 text-sm leading-relaxed mb-8 italic">
            "We carefully source, inspect, and deliver fresh fruits and vegetables that meet the highest standards for freshness, consistency, and reliability."
          </p>
          <div className="flex items-center gap-4 group cursor-pointer inline-flex">
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
              "group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] cursor-pointer",
              cat.size === 'large' ? "md:col-span-7 h-[400px] md:h-[600px]" : "md:col-span-5 h-[400px] md:h-[600px]"
            )}
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

            <div className="absolute top-10 right-10">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full">
                {cat.tag}
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white">
              <div className="flex items-end justify-between gap-6 md:gap-8">
                <div className="max-w-md">
                  <h3 className="text-3xl md:text-5xl font-serif mb-2 md:mb-4 group-hover:italic transition-all duration-500">{cat.title}</h3>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:translate-y-4 md:group-hover:translate-y-0">
                    {cat.desc}
                  </p>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-brand-ink transition-all duration-500 flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const QualityLab = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Rigorous Inspection',
      description: 'Every shipment undergoes a multi-point inspection process at the terminal to ensure peak freshness and quality.',
    },
    {
      icon: Award,
      title: 'Grading Standards',
      description: 'We adhere to and often exceed industry grading standards, ensuring consistent quality for our partners.',
    },
    {
      icon: CheckCircle2,
      title: 'Cold Chain Integrity',
      description: 'Our logistics maintain optimal temperatures from farm to your door, preserving produce integrity.',
    },
    {
      icon: History,
      title: 'Traceability',
      description: 'Full traceability from source to destination, providing transparency and accountability.',
    },
  ];

  return (
    <section id="quality-lab" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">Our Promise</span>
          <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] tracking-tighter">
            The Quality <br />
            <span className="italic text-brand-olive">Advantage</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-brand-ink/5 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-brand-ink" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-3 text-brand-ink">{feature.title}</h3>
              <p className="text-brand-ink/70 text-sm md:text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LogisticsSection = () => {
  return (
    <section id="logistics" className="py-20 md:py-32 bg-brand-green text-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-10 md:opacity-20 pointer-events-none">
        <img
          src="/images/logistics_terminal.png"
          className="w-full h-full object-cover"
          alt="Logistics"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-transparent to-transparent" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          <div className="lg:col-span-5">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">Global Logistics</span>
            <h2 className="text-4xl md:text-7xl font-serif mb-8 md:mb-12 leading-[1.1] tracking-tighter">
              Reliable <br />
              <span className="italic text-brand-cream/60">Distribution</span>
            </h2>
            <p className="text-brand-cream/60 text-base md:text-lg font-light leading-relaxed mb-12 max-w-xl">
              Our diverse sourcing network allows us to deliver premium local and imported produce year-round. We carefully source, inspect, and deliver fresh fruits and vegetables that meet the highest standards.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="text-brand-gold w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[11px] md:text-sm font-bold uppercase tracking-widest">Ontario Food Terminal Hub</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-brand-gold w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[11px] md:text-sm font-bold uppercase tracking-widest">Year-Round Availability</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/10 transition-all"
                >
                  <h4 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-brand-gold">{item.title}</h4>
                  <p className="text-brand-cream/50 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnersSection = () => {
  const brands = [
    { name: 'Little Bear', suffix: 'Produce', region: 'California', desc: 'Premium North American Greens', color: '#1A3C34' },
    { name: 'Washington', suffix: 'Fruit', region: 'Washington', desc: 'Industry Standard for Pomes', color: '#C5A059' },
    { name: 'Dole', suffix: 'Fresh', region: 'California', desc: 'Global Excellence in Vegetables', color: '#141414' },
    { name: 'Collins', suffix: 'Farms', region: 'Ontario', desc: 'Professional Ontario Root Crops', color: '#5A5A40' },
    { name: 'Saliba', suffix: 'Farms', region: 'Ontario', desc: 'Quality Local Ontario Growers', color: '#1A3C34' },
    { name: 'Sunkist', suffix: 'Growers', region: 'Global', desc: 'Excellence in Citrus Distribution', color: '#C5A059' }
  ];

  return (
    <section id="partners" className="py-24 md:py-48 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cream/30 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 md:mb-40 gap-16">
          <div className="max-w-4xl">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-8 block">Project Partners</span>
            <h2 className="text-6xl md:text-[10vw] font-serif leading-[0.8] tracking-tighter">
              Strategic <br />
              <span className="italic text-brand-olive">Alliances</span>
            </h2>
          </div>
          <div className="max-w-xs lg:pb-8">
            <p className="text-brand-ink/50 text-sm md:text-base leading-relaxed italic">
              "Excellence is never an accident; it is the result of high intention and sincere effort in our partnerships."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative p-12 md:p-16 h-full bg-brand-cream/50 rounded-[3rem] border border-brand-ink/5 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(26,60,52,0.15)] hover:-translate-y-4">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-gold/10 transition-colors duration-700" />

                <div className="relative z-10 flex flex-col h-full justify-between gap-16">
                  <div className="flex justify-between items-start">
                    <div className="px-4 py-1.5 bg-white rounded-full border border-brand-ink/5 text-[9px] font-black uppercase tracking-widest text-brand-gold">
                      {brand.region}
                    </div>
                    <div className="w-12 h-12 rounded-full border border-brand-ink/5 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Stylized Typographic Logo */}
                    <div className="flex flex-col">
                      <span className="text-4xl md:text-5xl font-serif text-brand-green leading-none tracking-tighter group-hover:italic transition-all duration-500">
                        {brand.name}
                      </span>
                      <span className="text-xs uppercase tracking-[0.4em] font-black text-brand-gold/60 mt-2">
                        {brand.suffix}
                      </span>
                    </div>

                    <div className="h-px w-12 bg-brand-gold/30 group-hover:w-full transition-all duration-700" />

                    <p className="text-brand-ink/40 text-sm leading-relaxed group-hover:text-brand-ink/60 transition-colors">
                      {brand.desc}
                    </p>
                  </div>
                </div>

                {/* Glassmorphism Hover Overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CommitmentSection = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-ink text-brand-cream overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-8 block">Our Commitment</span>
            <h2 className="text-4xl md:text-7xl font-serif mb-10 md:mb-12 leading-[1.1] tracking-tighter">
              Uncompromising <br />
              <span className="italic text-brand-cream/40">Quality Standards</span>
            </h2>
            <div className="space-y-10 md:space-y-12">
              {[
                { title: 'Source', desc: 'We source directly from local Ontario growers and top-tier North American producers to ensure the shortest path from field to fork.' },
                { title: 'Inspect', desc: 'Every pallet is rigorously inspected at the Ontario Food Terminal for freshness, consistency, and adherence to our grading standards.' },
                { title: 'Deliver', desc: 'Our cold-chain logistics ensure that delicate produce maintains peak quality throughout the entire distribution process.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-8 group">
                  <div className="text-brand-gold font-serif italic text-3xl md:text-4xl opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-serif mb-3 md:mb-4 text-brand-cream">{item.title}</h4>
                    <p className="text-brand-cream/60 text-xs md:text-sm leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative px-4 md:px-0">
            <div className="aspect-[4/3] rounded-[3rem] md:rounded-[4rem] overflow-hidden">
              <img
                src="/images/about_wholesale_produce.png"
                alt="Quality Inspection"
                className="w-full h-full object-cover brightness-75 grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 bg-brand-gold text-brand-ink p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] hidden sm:block shadow-2xl">
              <div className="text-4xl md:text-6xl font-serif mb-2 whitespace-nowrap">24 / 7</div>
              <div className="text-[9px] md:text-[10px] uppercase font-black tracking-widest opacity-60">Terminal Presence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <MarketplaceTicker />
      <AboutSectionSnapshot />
      <HeritageTimeline />
      <ProduceGrid />
      <QualityLab />
      <LogisticsSection />
      <PartnersSection />
      <CommitmentSection />

      {/* Final Premium CTA Section */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-brand-green relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
          <img
            src="/images/cta_background_final.png"
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[5s]"
            alt="Estate Background"
          />
        </div>
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-[9vw] font-serif text-white mb-12 leading-[0.85] tracking-tighter">
              Quality <br />
              <span className="italic text-brand-gold">Redefined.</span>
            </h2>
            <p className="text-brand-cream/60 text-lg md:text-2xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Elevate your inventory with the finest produce at the Ontario Food Terminal. Built on trust, driven by modern vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-lead-form'))}
                className="w-full sm:w-auto bg-brand-gold text-brand-ink px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl"
              >
                Wholesale Inquiry
              </button>
              <button className="w-full sm:w-auto border border-white/20 text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-ink hover:text-brand-cream transition-all">
                Our Collection
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsLeadFormOpen(true);
    window.addEventListener('open-lead-form', handleOpen);
    return () => window.removeEventListener('open-lead-form', handleOpen);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-brand-green selection:text-brand-cream">
      <div className="grain" />
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
        </Routes>
      </main>
      <Footer />
      {isLeadFormOpen && <LeadForm onClose={() => setIsLeadFormOpen(false)} />}
    </div>
  );
}

