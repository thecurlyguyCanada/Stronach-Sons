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

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-gold/30 pointer-events-none z-[9999]"
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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only attach mousemove listener on desktop
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const titleWords = ["Stronach", "and", "Sons", "2020"];

  return (
    <section className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center bg-brand-ink">
      {/* Background Parallax Layer */}
      <motion.div
        style={isMobile ? { opacity } : { y: y1, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          animate={isMobile ? undefined : {
            x: -mousePosition.x * 0.5,
            y: -mousePosition.y * 0.5,
          }}
          transition={isMobile ? undefined : { type: "spring", damping: 50, stiffness: 100 }}
          className="w-full h-full"
        >
          <img
            src="/images/hero_ontario_terminal.png"
            alt="Ontario Food Terminal"
            className="w-full h-full object-cover brightness-[0.4] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/60 via-transparent to-brand-cream" />
        </motion.div>
      </motion.div>

      {/* Floating Light Rays — desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -left-1/4 w-[100vw] h-[100vw] bg-brand-gold/10 rounded-full blur-[150px]"
          />
        </div>
      )}

      {/* Decorative Floating Text */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.h2
          style={isMobile ? undefined : { x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[40vw] font-serif text-white text-outline leading-none font-black italic select-none"
        >
          1954
        </motion.h2>
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="h-px w-12 bg-brand-gold" />
                  <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black">
                    Est. 1954 • Wholesale Excellence
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-8xl lg:text-[12vw] font-serif text-white leading-[0.85] md:leading-[0.8] tracking-tighter mb-8 md:mb-12">
                  {titleWords.map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 40, rotateX: -45 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        delay: 0.8 + (i * 0.2),
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className={cn(
                        "inline-block mr-[0.2em]",
                        word === "and" ? "italic font-normal text-brand-cream/80" : ""
                      )}
                    >
                      {word}
                      {i === 0 && <span className="hidden md:inline"><br /></span>}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              className="glass-card p-6 md:p-10 rounded-2xl md:rounded-[3rem] border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="relative z-10 text-brand-cream/80 text-base md:text-xl font-light leading-relaxed mb-8 md:mb-10 text-balance italic">
                "A trusted name at the Ontario Food Terminal. Built on professional expertise and an uncompromising commitment to quality."
              </p>
              <div className="relative z-10 flex flex-wrap gap-4">
                <a
                  href="mailto:stronson@stronachandosons.ca"
                  className="w-full sm:w-auto bg-brand-gold text-brand-ink px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(197,160,89,0.5)] group flex items-center justify-center gap-3"
                >
                  Wholesale Inquiry
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute left-12 bottom-12 hidden xl:block overflow-hidden">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col gap-8"
        >
          <div className="vertical-rl text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">
            STRONACH AND SONS 2020 — TORONTO, ON
          </div>
          <div className="w-px h-24 bg-gradient-to-b from-white/40 to-transparent mx-auto" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 right-12 hidden md:flex items-center gap-4 text-white/40"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
        <div className="w-12 h-px bg-white/20" />
      </motion.div>
    </section>
  );
};

const AboutSectionSnapshot = () => {
  return (
    <section id="our-legacy" className="py-24 md:py-48 bg-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/5 to-transparent pointer-events-none" />
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1"
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-black mb-6 block">Who We Are</span>
          <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-[1.1] tracking-tight">
            Driven by <br />
            <span className="italic text-brand-olive">Progress</span>
          </h2>
          <div className="space-y-8 text-brand-ink/70 text-base md:text-lg font-light leading-relaxed max-w-xl">
            <p>
              Founded in 1954, Stronach and Sons 2020 is a leading wholesale produce supplier in Ontario. Under new ownership since 2020, the company combines decades of heritage with modern expertise, strong relationships, and an uncompromising commitment to quality.
            </p>
            <p>
              Quality is at the core of everything we do. As an established produce wholesaler in Ontario, we carefully source, inspect, and deliver fresh fruits and vegetables that meet the highest standards for freshness, consistency, and reliability.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 border-t border-brand-ink/10 pt-12">
            <div>
              <div className="text-3xl md:text-4xl font-serif text-brand-green mb-2">1954</div>
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
        </motion.div>

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
              loading="lazy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-brand-gold text-brand-ink p-6 md:p-8 rounded-2xl shadow-2xl max-w-[160px] md:max-w-[200px]">
            <div className="text-[10px] font-black uppercase tracking-widest mb-2">Ontario Food Terminal</div>
            <p className="text-[9px] md:text-[10px] leading-relaxed font-bold">Proudly serving as a cornerstone of Ontario's food distribution network.</p>
          </div>
        </div>
      </div>
    </section >
  );
};

const HeritageTimeline = () => {
  const timelineEvents = [
    { year: '1954', title: 'The Beginning', description: 'Founded at the Ontario Food Terminal, establishing roots as a trusted wholesale produce supplier serving the Greater Toronto Area.', icon: History },
    { year: '1980s', title: 'Growth & Expansion', description: 'Expanded product lines and built lasting relationships with growers across Ontario and North America.', icon: TrendingUp },
    { year: '2020', title: 'New Ownership', description: 'Ownership changed to a new generation of experienced operators, bringing modern vision, stronger industry connections, and a renewed commitment to excellence.', icon: Award },
    { year: '2022', title: 'Network Expansion', description: 'Rapidly scaled operations with top-tier North American producers and invested in advanced cold-chain logistics.', icon: Activity },
    { year: 'Today', title: 'Trusted Partner', description: 'Leading as a trusted wholesale partner — 70+ years of heritage combined with modern expertise and uncompromising quality standards.', icon: Globe },
  ];

  return (
    <section id="heritage-timeline" className="py-24 md:py-48 bg-brand-ink text-brand-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-cream to-transparent opacity-10 pointer-events-none" />
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-32"
        >
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">Our Journey</span>
          <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
            A Legacy of <br />
            <span className="italic text-brand-cream/60">Excellence</span>
          </h2>
        </motion.div>

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
              <div className="relative w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center z-10 order-first md:order-2 mb-4 md:mb-0 flex-shrink-0">
                <event.icon className="w-6 h-6 text-brand-ink" />
              </div>
              <div className={cn(
                "md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right md:pr-16",
                idx % 2 === 0 ? "md:order-1" : "md:order-2 md:pl-16"
              )}>
                <div className="text-brand-gold text-3xl md:text-4xl font-serif mb-2">{event.year}</div>
                <h3 className="text-xl md:text-2xl font-serif mb-3 text-brand-cream">{event.title}</h3>
                <p className="text-brand-cream/60 text-sm md:text-base leading-relaxed max-w-md">{event.description}</p>
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
    <div className="bg-brand-gold py-6 overflow-hidden border-y border-brand-ink/10 relative z-20">
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
      title: 'Apples & Cherries',
      desc: 'Premium hand-selected apples and cherries sourced from top North American orchards for peak freshness and flavor.',
      img: '/images/apples_cherries_user.jpg',
      tag: 'Seasonal',
      size: 'large'
    },
    {
      title: 'Leafy Greens',
      desc: 'Fresh lettuce, spinach, kale, and mixed greens delivered daily for maximum crispness.',
      img: '/images/leafy_greens_user.jpg',
      tag: 'Daily',
      size: 'small'
    },
    {
      title: 'Mix Vegetables',
      desc: 'Curated selection of fresh mixed vegetables for restaurants and retail partners.',
      img: '/images/mix_veggies_user.jpg',
      tag: 'Core',
      size: 'small'
    },
    {
      title: 'Onions',
      desc: 'Ontario-grown and imported onions — red, yellow, white, and sweet varieties available year-round.',
      img: '/images/onions_user.jpg',
      tag: 'Year-Round',
      size: 'large'
    },
    {
      title: 'Zucchini & Squash',
      desc: 'Fresh zucchini and squash varieties sourced from local growers and premium suppliers.',
      img: '/images/zucchini_squash_user.png',
      tag: 'Seasonal',
      size: 'small'
    }
  ];

  const TiltCard = ({ cat, idx }: { cat: any, idx: number }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const check = () => setIsDesktop(window.innerWidth >= 1024);
      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDesktop) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rX = ((y - centerY) / centerY) * -10;
      const rY = ((x - centerX) / centerX) * 10;
      setRotateX(rX);
      setRotateY(rY);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1, duration: 0.8 }}
        onMouseMove={isDesktop ? handleMouseMove : undefined}
        onMouseLeave={isDesktop ? handleMouseLeave : undefined}
        animate={isDesktop ? { rotateX, rotateY } : undefined}
        className={cn(
          "group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] cursor-pointer perspective-1000",
          cat.size === 'large' ? "md:col-span-7 h-[400px] md:h-[600px]" : "md:col-span-5 h-[400px] md:h-[600px]"
        )}
      >
        <motion.div
          className="w-full h-full"
          whileHover={isDesktop ? { scale: 1.05 } : undefined}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={cat.img}
            alt={cat.title}
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

        <div className="absolute top-10 right-10">
          <div className="bg-white/10 lg:backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full">
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
    );
  };

  return (
    <section id="produce" className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto relative z-10">
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {categories.map((cat, idx) => (
          <TiltCard key={idx} cat={cat} idx={idx} />
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
          loading="lazy"
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
                <div>
                  <span className="text-[11px] md:text-sm font-bold uppercase tracking-widest block">Ontario Food Terminal Hub</span>
                  <span className="text-[10px] md:text-xs text-brand-cream/50">33 Connell Ct, Etobicoke, ON M8Z 1E8</span>
                </div>
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
                  className="bg-white/5 lg:backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/10 transition-all"
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
    { name: 'Little Bear', suffix: 'Produce', region: 'California', desc: 'Premium North American Greens', color: '#1A3C34', url: 'https://littlebearproduce.com', logo: '/images/brands/little_bear.png' },
    { name: 'Washington', suffix: 'Fruit', region: 'Washington', desc: 'Industry Standard for Pomes', color: '#C5A059', url: 'https://washfruitgrowers.com/', logo: '/images/brands/washington_fruit.svg' },
    { name: 'Dole', suffix: 'Fresh', region: 'California', desc: 'Global Excellence in Vegetables', color: '#141414', url: 'https://www.dole.com', logo: '/images/brands/dole.png' },
    { name: 'Collins', suffix: 'Farms', region: 'Ontario', desc: 'Canada Premium Grower', color: '#5A5A40', url: 'https://www.collins-farm.ca/', logo: '/images/brands/collins_farms.svg' },
    { name: 'Saliba', suffix: 'Farms', region: 'Ontario', desc: 'Quality Local Ontario Growers', color: '#1A3C34', url: 'https://www.facebook.com/salibagreenhouses/', logo: '/images/brands/saliba_farms.svg' },
    { name: 'Art', suffix: 'Farms', region: 'Ontario', desc: 'Premium Ontario Fresh Produce', color: '#C5A059', url: 'https://art-farm.ca/', logo: '/images/brands/art_farms.jpg' }
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
              <a href={brand.url} target="_blank" rel="noopener noreferrer" className="block h-full">
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
                      {/* Brand Logo */}
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-brand-ink/5 flex items-center justify-center shadow-sm overflow-hidden p-2">
                        <img src={brand.logo} alt={`${brand.name} ${brand.suffix} logo`} className="w-full h-full object-contain" />
                      </div>

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
                  <div className="absolute inset-0 bg-white/40 lg:backdrop-blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team = [
    { name: 'Tony Morano', role: 'Head of Operations' },
    { name: 'Joe Scali', role: 'Procurement & Sales' },
    { name: 'Jonathan Morano', role: 'Procurement & Sales' },
  ];

  return (
    <section id="team" className="py-24 md:py-48 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-gold/5 skew-x-12 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 md:mb-40 gap-16">
          <div className="max-w-4xl">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black mb-8 block">Our Team</span>
            <h2 className="text-6xl md:text-[10vw] font-serif leading-[0.8] tracking-tighter">
              The People <br />
              <span className="italic text-brand-olive">Behind the Promise</span>
            </h2>
          </div>
          <div className="max-w-xs lg:pb-8">
            <p className="text-brand-ink/50 text-sm md:text-base leading-relaxed italic">
              "Experienced professionals dedicated to delivering excellence at the Ontario Food Terminal."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative p-12 md:p-16 bg-white rounded-[3rem] border border-brand-ink/5 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(26,60,52,0.15)] hover:-translate-y-4">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-gold/10 transition-colors duration-700" />

                <div className="relative z-10 flex flex-col gap-8">
                  <div className="w-20 h-20 rounded-full bg-brand-green flex items-center justify-center">
                    <span className="text-brand-cream font-serif text-2xl italic">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <span className="text-3xl md:text-4xl font-serif text-brand-green leading-none tracking-tighter group-hover:italic transition-all duration-500">
                      {member.name}
                    </span>

                    <div className="h-px w-12 bg-brand-gold/30 group-hover:w-full transition-all duration-700" />

                    <div className="px-4 py-1.5 bg-brand-cream rounded-full border border-brand-ink/5 text-[9px] font-black uppercase tracking-widest text-brand-gold inline-block">
                      {member.role}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-white/40 lg:backdrop-blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationsSection = () => {
  const locations = [
    {
      label: 'Location 1',
      name: 'Evans Ave. Warehouse',
      address: '33 Connell Ct, Etobicoke, ON M8Z 1E8',
      postal: 'ON M8Z 1E8',
      tel: '(905) 677-2885',
    },
    {
      label: 'Location 2',
      name: 'Ontario Food Terminal',
      address: '165 The Queensway, Suite #237, Toronto.',
      postal: 'ON M8Y 1H8',
      tel: '(416) 259-5410',
    },
  ];

  return (
    <section id="locations" className="py-24 md:py-32 bg-[#e5e5e0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center space-y-6"
            >
              <h3 className="text-2xl font-serif font-bold text-brand-ink tracking-tight">
                {loc.label}
              </h3>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-ink/60">
                {loc.name}
              </p>
              <p className="text-sm text-brand-ink/70 leading-relaxed">
                {loc.address}
              </p>
              <p className="text-sm text-brand-ink/70">
                {loc.postal}
              </p>
              <p className="text-sm text-brand-ink/70">
                Tel. {loc.tel}
              </p>
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
                loading="lazy"
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

const FloatingAssets = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
      <motion.div
        animate={{
          y: [0, -100, 0],
          rotate: [0, 15, 0],
          x: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-32 h-32 opacity-10"
      >
        <Leaf className="w-full h-full text-brand-gold" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 150, 0],
          rotate: [0, -20, 0],
          x: [0, -30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2/3 right-10 w-48 h-48 opacity-10"
      >
        <Leaf className="w-full h-full text-brand-olive" />
      </motion.div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      <FloatingAssets />
      <Hero />
      <MarketplaceTicker />
      <AboutSectionSnapshot />
      <HeritageTimeline />
      <ProduceGrid />
      <QualityLab />
      <LogisticsSection />
      <PartnersSection />
      <TeamSection />
      <CommitmentSection />
      <LocationsSection />

      {/* Final Premium CTA Section */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-brand-green relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
          <img
            src="/images/cta_background.png"
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[5s]"
            alt="Estate Background"
            loading="lazy"
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
              <a
                href="mailto:stronson@stronachandosons.ca"
                className="inline-block text-center w-full sm:w-auto bg-brand-gold text-brand-ink px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl"
              >
                Wholesale Inquiry
              </a>
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
    </div>
  );
}

