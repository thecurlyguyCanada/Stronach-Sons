import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useDocumentHead } from '../hooks/useDocumentHead';

const PartnersSection = () => {
  const brands = [
    { name: 'Little Bear', suffix: 'Produce', region: 'California', desc: 'Premium North American Greens', color: '#1A3C34', url: 'https://littlebearproduce.com', logo: '/images/brands/little_bear.png' },
    { name: 'Washington', suffix: 'Fruit', region: 'Washington', desc: 'Industry Standard for Pomes', color: '#C5A059', url: 'https://washfruitgrowers.com/', logo: '/images/brands/washington_fruit.svg' },
    { name: 'Dole', suffix: 'Fresh', region: 'California', desc: 'Global Excellence in Vegetables', color: '#141414', url: 'https://www.dole.com', logo: '/images/brands/dole.png' },
    { name: 'Collins', suffix: 'Farms', region: 'Ontario', desc: 'Canada Premium Grower', color: '#5A5A40', url: 'https://www.collins-farm.ca/', logo: '/images/brands/collins_farms.svg' },
    { name: 'Saliba', suffix: 'Farms', region: 'Ontario', desc: 'Quality Local Ontario Growers', color: '#1A3C34', url: 'https://www.facebook.com/salibagreenhouses/', logo: '/images/brands/saliba_farms.svg' },
    { name: 'Welsh Bros', suffix: '', region: 'Ontario', desc: 'Scotland, Ontario — Trusted Grower Partner', color: '#1A3C34', url: 'https://www.welshbros.ca/', logo: '' },
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
                      {brand.logo ? (
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-brand-ink/5 flex items-center justify-center shadow-sm overflow-hidden p-2">
                          <img src={brand.logo} alt={`${brand.name} ${brand.suffix} logo`} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-brand-green flex items-center justify-center shadow-sm">
                          <span className="text-brand-cream font-serif text-2xl italic">
                            {brand.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}

                      {/* Stylized Typographic Logo */}
                      <div className="flex flex-col">
                        <span className="text-4xl md:text-5xl font-serif text-brand-green leading-none tracking-tighter group-hover:italic transition-all duration-500">
                          {brand.name}
                        </span>
                        {brand.suffix && (
                          <span className="text-xs uppercase tracking-[0.4em] font-black text-brand-gold/60 mt-2">
                            {brand.suffix}
                          </span>
                        )}
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

const PartnersPage = () => {
  useDocumentHead({
    title: 'Our Partners',
    description: 'Stronach and Sons 2020 partners with top producers including Little Bear Produce, Washington Fruit, Dole, Collins Farms, Saliba Farms, and Welsh Bros for premium wholesale produce.',
    canonical: '/partners',
  });

  return (
    <div className="min-h-screen bg-brand-cream pt-24 lg:pt-32">
      <PartnersSection />
    </div>
  );
};

export default PartnersPage;
