import React from 'react';
import { motion } from 'motion/react';

const memberships = [
  { name: 'CPMA', logo: '/images/memberships/cpma.png', url: 'https://www.cpma.ca/' },
  { name: 'GFSI', logo: '/images/memberships/gfsi.png', url: 'https://www.fssc.com/' },
  { name: 'DRC', logo: '/images/memberships/drc.png', url: 'https://www.fightdirtyenergy.org/' },
  { name: 'SFBB', logo: '/images/memberships/sfbb.jpg', url: 'https://canadacerts.ca/' },
];

export const MembershipBanner = () => {
  return (
    <section className="bg-brand-ink relative overflow-hidden">
      {/* Header bar */}
      <div className="border-b border-white/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-6">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-black">
            Proud Member Of
          </span>
        </div>
      </div>

      {/* Logos */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-24">
          {memberships.map((member, idx) => (
            <motion.a
              key={member.name}
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group flex items-center justify-center"
            >
              <div className="h-16 md:h-20 w-auto flex items-center justify-center rounded-xl bg-white/5 border border-white/5 px-6 py-3 hover:bg-white/10 hover:border-white/10 transition-all duration-500">
                <img
                  src={member.logo}
                  alt={`${member.name} membership`}
                  className="h-full w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
