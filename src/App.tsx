/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useDocumentHead } from './hooks/useDocumentHead';
import {
  Leaf,
  ArrowUpRight,
  Award,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  History,
  TrendingUp,
  Activity,
  Globe
} from 'lucide-react';
import { cn } from './lib/utils';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MembershipBanner } from './components/MembershipBanner';
import AboutPage from './pages/About';
import DocumentationPage from './pages/Documentation';
import ProducePage from './pages/Produce';
import PartnersPage from './pages/Partners';
import TeamPage from './pages/Team';
import LogisticsPage from './pages/Logistics';

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
            alt="Ontario Food Terminal wholesale produce market in Toronto"
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
  useDocumentHead({
    title: 'Premium Wholesale Produce Ontario',
    description: 'Stronach and Sons 2020 is a leading wholesale produce supplier at the Ontario Food Terminal in Toronto. Fresh fruits and vegetables for restaurants, retailers, and foodservice since 1954.',
    canonical: '/',
  });

  return (
    <div className="relative overflow-hidden">
      <FloatingAssets />
      <Hero />
      <MarketplaceTicker />
      <AboutSectionSnapshot />
      <HeritageTimeline />

      {/* Final Premium CTA Section */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-brand-green relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
          <img
            src="/images/cta_background.png"
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[5s]"
            alt="Wholesale produce distribution facility"
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
          <Route path="/produce" element={<ProducePage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/logistics" element={<LogisticsPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
        </Routes>
      </main>
      <MembershipBanner />
      <Footer />
    </div>
  );
}
