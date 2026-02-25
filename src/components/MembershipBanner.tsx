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
    <section className="bg-white relative overflow-hidden border-t border-brand-ink/5">
      {/* Header */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-4">
        <h3 className="text-3xl md:text-5xl font-serif text-brand-green tracking-tighter text-center">
          Proud <span className="italic text-brand-olive">Member Of</span>
        </h3>
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
              <img
                src={member.logo}
                alt={`${member.name} membership`}
                className="h-16 md:h-24 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
