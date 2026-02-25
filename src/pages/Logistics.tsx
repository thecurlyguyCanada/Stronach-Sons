import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';

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

const LocationsSection = () => {
  const locations = [
    {
      label: 'Location 1',
      name: 'Evans Ave. Warehouse',
      address: '33 Connell Ct, Etobicoke, ON M8Z 1E8',
      postal: 'ON M8Z 1E8',
      tel: '(905) 677-2885',
      tel2: '(416) 259-5009',
    },
    {
      label: 'Location 2',
      name: 'Ontario Food Terminal',
      address: '165 The Queensway, Suite #237, Toronto.',
      postal: 'ON M8Y 1H8',
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
              {loc.tel && (
                <p className="text-sm text-brand-ink/70">
                  Tel. {loc.tel}
                </p>
              )}
              {loc.tel2 && (
                <p className="text-sm text-brand-ink/70">
                  Tel. {loc.tel2}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LogisticsPage = () => {
  return (
    <div className="min-h-screen bg-brand-cream pt-24 lg:pt-32">
      <LogisticsSection />
      <CommitmentSection />
      <LocationsSection />
    </div>
  );
};

export default LogisticsPage;
